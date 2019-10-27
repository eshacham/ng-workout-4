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
  AddWorkoutDay,
  Direction,
  StartFirstExercise,
  ChangeDisplayMode,
  DeleteWorkoutDay,
  MoveWorkoutDay,
  StopExercise
} from 'src/app/store/actions/workoutDays.actions';
import { getCurrentWorkout } from 'src/app/store/selectors/workouts.selectors';
import { getWorkoutDay } from 'src/app/store/selectors/workoutDays.selectors';
import { Guid } from 'guid-typescript';
import { DisplayMode } from 'src/app/models/enums';
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
    this.subs = this.route.params.subscribe(params => {
      this.workoutId = params.id;
    });
  }

  get activeDayId(): string {
    return this.days ? this.days[this.activeDayIndex] : null;
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

  ngOnInit() {
    this.store.select(getCurrentWorkout)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (data) => {
        if (data.workout) {
          console.log(`workout-days ${this.workoutId} - getCurrentWorkout:`, data);
          this.days = data.workout.days;
          this.name = data.workout.name;
          if (!this.slides) {
            console.log('workout-days ngOninit no slides!');
            return;
          }
          this.slides.update();
          const selectedDay = data.selectedDayId;
          const lastWorkoutDayIndex = this.days.findIndex(day => day === selectedDay);
          console.log(`workout-days ${this.workoutId} - selectedDay ${selectedDay} on index ${lastWorkoutDayIndex}`);
          if (lastWorkoutDayIndex !== this.activeDayIndex) {
            console.log(`workout-days ${this.workoutId} - sliding to last selected day index ${lastWorkoutDayIndex}`);
            await new Promise(() => setTimeout(async () => {
              await this.slides.slideTo(lastWorkoutDayIndex, 0);
            }, 1));
          } else {
            this.store.select(getWorkoutDay(selectedDay))
              .pipe(take(1))
              .subscribe(workoutDayState => {
                  this.adjustDisplayMode(workoutDayState);
              });
          }
        }
      });
  }

  async slideChanged() {
    if (this.slides && this.days) {
      this.activeDayIndex = await this.slides.getActiveIndex();
      console.log(`workout-days ${this.workoutId} slideChanged to index ${this.activeDayIndex}`);
      this.store.select(getWorkoutDay(this.activeDayId))
        .pipe(take(1))
        .subscribe(state => {
          if (state) {
            this.adjustDisplayMode(state);
          }
        });
      this.store.dispatch(new SelectWorkoutDay(
        {
          workoutId: this.workoutId,
          dayId: this.days[this.activeDayIndex]
        }));
    }
  }

  private adjustDisplayMode(workoutDayState: WorkoutDayBean) {
    console.log(`workout-days ${this.workoutId} adjusting Display mode to - ${DisplayMode[workoutDayState.displayMode]}`);
    this.DisplayMode = workoutDayState.displayMode;
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

  private async addWorkoutDay(event) {
    const newId = Guid.raw();
    const newDay = new WorkoutDayBean({
      id: newId,
      name: 'new workout day',
      exerciseSets: [],
      workoutId: this.workoutId,
      displayMode: DisplayMode.Edit
    });
    const index = this.activeDayIndex;
    const islast = this.days.length - 1 === index;
    console.log(`workout-days ${this.workoutId} splicing (insert) at ${index}`);
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
    event.stopPropagation();
  }

  async deleteWorkoutDay(event) {
    this.store.dispatch(new DeleteWorkoutDay({
      dayId: this.activeDayId,
    }));
    this.cdr.detectChanges();
    await this.slides.update();

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
        }));
        this.days.filter(dayId => dayId !== this.activeDayId)
          .forEach(dayId => this.DispatchStopExercise(dayId));
        break;
      case DisplayMode.Workout:
        this.DisplayMode = DisplayMode.Display;
        this.DispatchChangeDisplayMode();
        break;
    }
  }

  DispatchChangeDisplayMode(dayId: string = null) {
    this.store.dispatch(new ChangeDisplayMode({
      id: dayId || this.activeDayId,
      displayMode: this.DisplayMode,
    }));
  }

  DispatchStopExercise(dayId: string) {
    this.store.dispatch(new StopExercise({
      id: dayId,
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
        break;
    }
    this.DispatchChangeDisplayMode();
  }

  async selectExerciseToAdd(event) {
    this.router.navigate(['select-exercise'], { relativeTo: this.route });
    event.stopPropagation();
  }

}
