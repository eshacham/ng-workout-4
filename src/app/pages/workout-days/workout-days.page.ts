import { Subject, Subscription } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides as Slides, IonFab } from '@ionic/angular';
import { IAppState } from 'src/app/store/state/app.state';
import { WorkoutDayBean } from '../../models/WorkoutDay';
import { UnselectWorkout } from 'src/app/store/actions/workouts.actions';
import {
  SelectWorkoutDay,
  WorkoutDayDeleted,
  AddWorkoutDay,
  Direction,
  WorkoutDayMoved,
  StartFirstExercise,
  ChangeDisplayMode,
  DeleteWorkoutDay,
  MoveWorkoutDay
} from 'src/app/store/actions/workoutDays.actions';
import { getCurrentWorkoutSelectedDayId, getCurrentWorkout } from 'src/app/store/selectors/workouts.selectors';
import { getWorkoutDayId2Delete, getSelectedWorkoutDayState } from 'src/app/store/selectors/workoutDays.selectors';
import { getWorkoutDayMoveDirection } from 'src/app/store/selectors/workoutDays.selectors';
import { Guid } from 'guid-typescript';
import { UpdateWorkouts, UpdateImages } from 'src/app/store/actions/data.actions';
import { DisplayMode, RunningState } from 'src/app/models/enums';
import { getMediaIdsByDay } from 'src/app/store/selectors/exercises.selectors';
import { UpdateExerciseMediaUsage } from 'src/app/store/actions/exercisesMedia.actions';

@Component({
  selector: 'app-workout-days',
  templateUrl: './workout-days.page.html',
  styleUrls: ['./workout-days.page.scss'],
})
export class WorkoutDaysPage implements OnInit, OnDestroy {

  days: string[];
  name: string;
  workoutId: string;
  isNewDayAdded: boolean;
  subs: Subscription;
  activeDayIndex = 0;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @ViewChild('slider') slides: Slides;
  @ViewChild('fabWorkout') fabWorkout: IonFab;
  @ViewChild('fabEdit') fabEdit: IonFab;

  slideOpts = {
    autoHeight: false,
    pagination: {
      type: 'bullets',
      clickable: false,
      el: '.swiper-pagination',
      cssMode: true,
      longSwipes: false,
    },
    noSwipingSelector: 'ion-range, ion-reorder, ion-fab, ion-button'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private store: Store<IAppState>) {
    this.isNewDayAdded = false;
    this.subs = this.route.params.subscribe(params => {
      this.workoutId = params.id;
    });
  }

  get activeDayId(): string {
    return this.days[this.activeDayIndex];
  }

  private _displayMode: DisplayMode = DisplayMode.Display;
  get DisplayMode(): DisplayMode {
    return this._displayMode;
  }

  set DisplayMode(val: DisplayMode) {
    if (this._displayMode !== val) {
      this._displayMode = val;
    }
  }

  async ngOnInit() {
    this.store.select(getCurrentWorkout)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (workout) => {
        if (workout) {
          console.log(`workout-days ${this.workoutId} - selectCurrentWorkout:`, workout);
          this.days = workout.days;
          this.name = workout.name;
          if (this.slides) {
            this.slides.update();
          }
        }
      });

    this.store.select(getWorkoutDayId2Delete)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (dayId) => {
        if (dayId) {
          console.log(`workout-days ${this.workoutId} - selectWorkoutDayId2Delete: ${dayId}`);
          this.cdr.detectChanges();
          await this.slides.update();
          this.activeDayIndex = await this.slides.getActiveIndex();
          const nextWorkoutDayId = this.days[this.activeDayIndex];
          console.log(`workout-days ${this.workoutId} deleted workout day ${dayId}. next day is ${nextWorkoutDayId}`);
          this.store.dispatch(new WorkoutDayDeleted());
          this.store.dispatch(new SelectWorkoutDay(
            {
              workoutId: this.workoutId,
              dayId: nextWorkoutDayId
            }));
          await this.saveChanges();
        }
      });
    this.store.select(getWorkoutDayMoveDirection)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (direction) => {
        console.log(`workout-days ${this.workoutId} - SelectworkoutDayMoveDirection ${direction}`);
        if (direction) {
          console.log(`workout-days ${this.workoutId} moving day ${Direction[direction]}`);
          this.store.dispatch(new WorkoutDayMoved());
          await this.saveChanges();
        }
      });
  }
  ionViewWillEnter() {
    this.store.select(getCurrentWorkoutSelectedDayId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (selectedWorkoutDay) => {
        if (!(this.days && selectedWorkoutDay &&
          selectedWorkoutDay.workoutId && selectedWorkoutDay.dayId)) {
            console.log(`workout-days ${this.workoutId} - getCurrentWorkoutSelectedDayId: missing selectedWorkoutDay`, selectedWorkoutDay);
            return;
          }
          const dayId = selectedWorkoutDay.dayId;
          console.log(`workout-days ${this.workoutId} - getCurrentWorkoutSelectedDayId ${dayId}`);
          const lastWorkoutDayIndex = this.days.findIndex(day => day === dayId);
          if (lastWorkoutDayIndex !== this.activeDayIndex) {
            console.log(`workout-days ${this.workoutId} - sliding to last selected day index ${lastWorkoutDayIndex}`);
            await new Promise(() => setTimeout(async () => {
              await this.slides.slideTo(lastWorkoutDayIndex, 0);
            }, 1));
          }
          this.store.select(getSelectedWorkoutDayState)
          .pipe(take(1))
          .subscribe(state => {
            if (state) {
              this.adjustDisplayMode(state);
            }
          });
      });
  }

  private adjustDisplayMode(state: WorkoutDayBean) {
    console.log(`workout-days ${this.workoutId} adjusting Display mode to - ${state.displayMode}`);
    this.DisplayMode = state.displayMode;
    switch (this.DisplayMode) {
      case DisplayMode.Display:
        this.fabEdit.close();
        this.fabWorkout.close();
        break;
      case DisplayMode.Edit:
        this.fabEdit.activated = true;
        this.fabWorkout.close();
        break;
      case DisplayMode.Workout:
        this.fabEdit.close();
        this.fabWorkout.activated = true;
        break;
    }
  }

  ngOnDestroy() {
    console.log(`workout-days ${this.workoutId} ngOnDestroy`);
    this.subs.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.store.dispatch(new UnselectWorkout());
  }

  get isLastDayActive(): boolean {
    return this.days && this.activeDayIndex === this.days.length - 1;
  }
  get isFirstDayActive(): boolean {
    return this.activeDayIndex === 0;
  }
  get isOneDayOnly(): boolean {
    return this.days && this.days.length === 1;
  }

  async slideChanged() {
    if (this.slides && this.days) {
      this.activeDayIndex = await this.slides.getActiveIndex();
      console.log(`workout-days ${this.workoutId} slideChanged to index ${this.activeDayIndex}`);
      this.store.dispatch(new SelectWorkoutDay(
        {
          workoutId: this.workoutId,
          dayId: this.days[this.activeDayIndex]
        }));
    }
  }

  async saveChanges() {
    this.store.dispatch(new UpdateWorkouts());
  }

  private async addWorkoutDay(event) {
    const newId = Guid.raw();
    const newDay = new WorkoutDayBean({
      id: newId,
      name: 'new workout day',
      exerciseSets: [],
      workoutId: this.workoutId
    });
    const index = this.activeDayIndex;
    const islast = this.days.length - 1 === index;
    console.log(`workout-days ${this.workoutId} splicing (insert) at ${index}`);
    this.isNewDayAdded = true;
    this.fabEdit.activated = true;
    this.store.dispatch(new AddWorkoutDay({
      workoutId: this.workoutId,
      day: newDay,
      index2AddFrom: index
    }));

    if (this.slides) {
      await this.slides.update();
      if (islast) {
        await this.slides.slideTo(this.days.length - 1);
      }
    }

    this.store.dispatch(new SelectWorkoutDay(
      {
        workoutId: this.workoutId,
        dayId: newId
      }));
    await this.saveChanges();
    event.stopPropagation();
  }

  deleteWorkoutDay(event) {
    this.store.select(getMediaIdsByDay(this.activeDayId))
      .pipe(take(1))
      .subscribe(mediaIds => {
        if (mediaIds.length) {
          this.decreseMediasUsage(mediaIds);
        }
        this.store.dispatch(new DeleteWorkoutDay({
          dayId: this.activeDayId,
          // sets: this.days[this.activeDayIndex]
        }));
      });
    event.stopPropagation();
  }

  moveForwardWorkoutDay(event) {
    this.store.dispatch(new MoveWorkoutDay({ direction: Direction.Forward }));
    event.stopPropagation();
  }

  moveBackWorkoutDay(event) {
    this.store.dispatch(new MoveWorkoutDay({ direction: Direction.Backword }));
    event.stopPropagation();
  }

  decreseMediasUsage(mediaIds: string[]) {
    this.store.dispatch(new UpdateExerciseMediaUsage({
      ids: mediaIds,
      mediaUsageCounterInc: -1
    }));
    this.store.dispatch(new UpdateImages());
  }

  getWorkoutDayIndexById(id: string) {
    return this.days.findIndex(day => day === id);
  }

  startWorkoutToggler() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Workout;
        this.fabEdit.close();
        this.store.dispatch(new StartFirstExercise({
          id: this.activeDayId,
          runningExerciseSetIndex: 0,
          displayMode: DisplayMode.Workout,
          runningState: RunningState.Starting,
          exerciseSets: null,
          name: null
        }));
        break;
      case DisplayMode.Workout:
        this.DisplayMode = DisplayMode.Display;
        this.DispatchChangeDisplayMode();
        break;
    }
  }

  DispatchChangeDisplayMode() {
    this.store.dispatch(new ChangeDisplayMode({
      id: this.activeDayId,
      runningExerciseSetIndex: null,
      displayMode: this.DisplayMode,
      runningState: RunningState.NA,
      exerciseSets: null,
      name: null
    }));
  }

  stopWorkout() {
    switch (this.DisplayMode) {
      case DisplayMode.Workout:
        this.DisplayMode = DisplayMode.Display;
        break;
      case DisplayMode.Display:
      case DisplayMode.Edit:
        break;
    }
    this.DispatchChangeDisplayMode();
  }

  async editWorkoutToggler() {
    switch (this.DisplayMode) {
      case DisplayMode.Workout:
      case DisplayMode.Display:
        this.fabWorkout.close();
        this.DisplayMode = DisplayMode.Edit;
        break;
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Display;
        await this.saveChanges();
        break;
    }
    this.DispatchChangeDisplayMode();
  }

  async selectExerciseToAdd(event) {
    this.router.navigate(['select-exercise'], { relativeTo: this.route });
    event.stopPropagation();
  }


}
