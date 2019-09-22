import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides as Slides, NavController } from '@ionic/angular';
import { IAppState } from 'src/app/store/state/app.state';
import { WorkoutDay } from '../../models/WorkoutDay';
import { UnselectWorkout } from 'src/app/store/actions/workouts.actions';
import {
  SelectWorkoutDay,
  WorkoutDayDeleted,
  WorkoutDayAdded,
  Direction,
  WorkoutDayMoved
} from 'src/app/store/actions/workoutDays.actions';
import { selectCurrentWorkoutSelectedDayId, selectCurrentWorkout } from 'src/app/store/selectors/workouts.selectors';
import { selectWorkoutDayId2Delete } from 'src/app/store/selectors/workoutDays.selectors';
import { SelectWorkoutDayId2AddFrom, SelectworkoutDayMoveDirection } from 'src/app/store/selectors/workoutDays.selectors';
import { Guid } from 'guid-typescript';
import { UpdateWorkouts } from 'src/app/store/actions/data.actions';

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

  slideOpts = {
    autoHeight: false,
    pagination: {
      type: 'bullets',
      clickable: false,
      el: '.swiper-pagination',
    },
    noSwipingSelector: 'ion-range, ion-reorder, ion-fab, ion-button'
  };

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private store: Store<IAppState>) {
    this.isNewDayAdded = false;
    this.subs = this.route.params.subscribe(params => {
      this.workoutId = params.id;
    });
  }

  async ngOnInit() {
    this.store.select(selectCurrentWorkout)
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

    this.store.select(selectWorkoutDayId2Delete)
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
    this.store.select(SelectWorkoutDayId2AddFrom)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (dayId) => {
        console.log(`workout-days ${this.workoutId} - SelectWorkoutId2AddDay ${dayId}`);
        if (dayId) {
          await this.addWorkoutDay(dayId);
        }
      });
    this.store.select(SelectworkoutDayMoveDirection)
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
    this.store.select(selectCurrentWorkoutSelectedDayId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (selectedWorkoutDayState) => {
        if (!(this.slides && this.days && selectedWorkoutDayState &&
          selectedWorkoutDayState.workoutId && selectedWorkoutDayState.dayId)) { return; }
        const workoutId = selectedWorkoutDayState.workoutId;
        if (workoutId === this.workoutId) {
          const dayId = selectedWorkoutDayState.dayId;
          console.log(`workout-days ${this.workoutId} - selectCurrentWorkoutSelectedDayId ${dayId}`);
          const lastWorkoutDayIndex = this.days.findIndex(day => day === dayId);
          if (lastWorkoutDayIndex !== this.activeDayIndex) {
            console.log(`workout-days ${this.workoutId} - sliding to last selected day index ${lastWorkoutDayIndex}`);
            await new Promise(() => setTimeout(async () => {
              await this.slides.slideTo(lastWorkoutDayIndex, 0);
            }, 1));
          }
        }
      });
    this.slideChanged();
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

  private async addWorkoutDay(currentWorkoutDayId: string) {
    const newId = Guid.raw();
    const newDay = new WorkoutDay({
      id: newId,
      name: 'new workout day',
      exerciseSets: []
    });
    const index = this.getWorkoutDayIndexById(currentWorkoutDayId);
    const last = this.days.length - 1 === index;
    console.log(`workout-days ${this.workoutId} splicing (insert) at ${index}`);
    this.isNewDayAdded = true;
    this.store.dispatch(new WorkoutDayAdded({
      workoutId: this.workoutId,
      dayId: newDay.id,
      index2AddFrom: index
    }));

    await this.slides.update();
    if (last) {
      await this.slides.slideTo(this.days.length - 1);
    }
    this.store.dispatch(new SelectWorkoutDay(
      {
        workoutId: this.workoutId,
        dayId: newId
      }));
    await this.saveChanges();
  }

  getWorkoutDayIndexById(id: string) {
    return this.days.findIndex(day => day === id);
  }

}
