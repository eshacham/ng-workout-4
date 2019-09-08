import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides as Slides, NavController } from '@ionic/angular';
import { IAppState } from 'src/app/store/state/app.state';
import { Workout, WorkoutBean } from '../../models/Workout';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { WorkoutDay } from '../../models/WorkoutDay';
import { SelectWorkout, UnselectWorkout } from 'src/app/store/actions/workouts.actions';
import {
  SelectWorkoutDay,
  WorkoutDayDeleted,
  WorkoutDayAdded,
  Direction,
  WorkoutDayMoved
} from 'src/app/store/actions/workoutDays.actions';
import { selectCurrentWorkoutSelectedDayId, selectCurrentWorkout } from 'src/app/store/selectors/workouts.selectors';
import { selectWorkoutDayId2Delete } from 'src/app/store/selectors/workoutDays.selectors';
import { selectHasWorkoutsBeenReset } from 'src/app/store/selectors/data.selectors';
import { SelectWorkoutDayId2AddFrom, SelectworkoutDayMoveDirection } from 'src/app/store/selectors/workoutDays.selectors';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-workout-days',
  templateUrl: './workout-days.page.html',
  styleUrls: ['./workout-days.page.scss'],
})
export class WorkoutDaysPage implements OnInit, OnDestroy {

  workout: WorkoutBean;
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
    private navCtrl: NavController,
    // private dataService: DataServiceProvider,
    private store: Store<IAppState>) {
    this.isNewDayAdded = false;
    this.subs = this.route.params.subscribe(params => {
      this.workoutId = params.id;
      this.store.dispatch(new SelectWorkout({ workoutId: this.workoutId.toString() }));
    });
  }

  async ngOnInit() {
    this.store.select(selectCurrentWorkout)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (workout) => {
        console.log('workout days redux - selectCurrentWorkout:', workout);
        this.workout = workout;
      });
    this.store.select(selectHasWorkoutsBeenReset)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (reset) => {
        console.log('workout days redux - HasDefaultWorkoutsBeenReset:', reset);
        if (reset) {
          console.log('workout-days: Workouts have been reset!: got to go back to workouts ');
          await this.navCtrl.navigateBack('/tabs/tab-workouts');
        }
      });
    this.store.select(selectWorkoutDayId2Delete)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (dayId) => {
        console.log('workout days redux - selectWorkoutDayId2Delete:', dayId);
        if (dayId) {
          this.deleteWorkoutDay(dayId);
        }
      });
    this.store.select(SelectWorkoutDayId2AddFrom)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (dayId) => {
        console.log('workout days redux - SelectWorkoutId2AddDay:', dayId);
        if (dayId) {
          await this.addWorkoutDay(dayId);
        }
      });
    this.store.select(SelectworkoutDayMoveDirection)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (direction) => {
        console.log('workout days redux - SelectworkoutDayMoveDirection:', direction);
        if (direction) {
          await this.moveWorkoutDay(direction);
        }
      });
  }

  ionViewWillEnter() {
    this.store.select(selectCurrentWorkoutSelectedDayId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (selectedWorkoutDayState) => {
        if (!(this.slides && this.workout && selectedWorkoutDayState &&
          selectedWorkoutDayState.workoutId && selectedWorkoutDayState.dayId)) { return; }
        const workoutId = selectedWorkoutDayState.workoutId;
        if (workoutId === this.workoutId) {
          const dayId = selectedWorkoutDayState.dayId;
          console.log('workout days - redux - selectCurrentWorkoutSelectedDay:', dayId);
          const lastWorkoutDayIndex = this.workout.days.findIndex(day => day === dayId);
          if (lastWorkoutDayIndex !== this.activeDayIndex) {
            console.log('sliding to last selected day index:', lastWorkoutDayIndex);
            await this.slides.slideTo(lastWorkoutDayIndex, 0);
          }
        }
      });
      this.slideChanged();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - workout days');
    this.subs.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.store.dispatch(new UnselectWorkout());
  }

  get isLastDayActive(): boolean {
    return this.workout && this.activeDayIndex === this.workout.days.length - 1;
  }
  get isFirstDayActive(): boolean {
    return this.activeDayIndex === 0;
  }
  get isOneDayOnly(): boolean {
    return this.workout && this.workout.days.length === 1;
  }

  async slideChanged() {
    if (this.slides && this.workout) {
      this.activeDayIndex = await this.slides.getActiveIndex();
      console.log('workout-days slideChanged to index', this.activeDayIndex);
      this.store.dispatch(new SelectWorkoutDay(
        {
          workoutId: this.workout.id.toString(),
          dayId: this.workout.days[this.activeDayIndex]
        }));
    }
  }

  async saveChanges() {
    // await this.dataService.saveWorkouts();
  }

  moveWorkoutDay(direction: Direction) {
    if (direction === Direction.Backword) {
      this.moveBackWorkoutDay(this.activeDayIndex);
    } else {
      this.moveForwardWorkoutDay(this.activeDayIndex);
    }
    this.store.dispatch(new WorkoutDayMoved());
  }

  private async moveForwardWorkoutDay(index: number) {
    console.log('moving day forward');
    if (index + 1 < this.workout.days.length) {
      this.workout.days.splice(index, 0, this.workout.days.splice(index + 1, 1)[0]);
      await this.slides.update();
      await this.saveChanges();
      await this.slides.slideNext(0);
    }
  }

  private async moveBackWorkoutDay(index: number) {
    console.log('moving day back');
    if (index - 1 >= 0) {
      this.workout.days.splice(index, 0, this.workout.days.splice(index - 1, 1)[0]);
      await this.slides.update();
      await this.saveChanges();
      await this.slides.slidePrev(0);
    }
  }

  private async addWorkoutDay(currentWorkoutDayId: string) {
    const newId = Guid.raw();
    const newDay = new WorkoutDay({ id: newId, name: 'new workout day', exerciseSets: [] });
    const index = this.getWorkoutDayIndexById(currentWorkoutDayId);
    console.log('splicing (insert) at ', index);
    this.isNewDayAdded = true;
    // this.workout.days.splice(index + 1, 0, newDay);
    await this.slides.update();
    await this.saveChanges();
    console.log('sliding forward');
    await this.slides.slideNext(0);
    this.store.dispatch(new WorkoutDayAdded({ workoutDayId: newDay.id.toString() }));
  }

  private async deleteWorkoutDay(dayId: string) {
    if (this.workout.days.length > 1) {
      const index = this.workout.days.findIndex(day => day === dayId);
      console.log('splicing (delete) at ', index);
      const oldDayId = this.workout.days[index];
      await this.actuallyDeleteWorkoutDay(index);
      await this.slides.update();
      this.activeDayIndex = await this.slides.getActiveIndex();
      const nextWorkoutDayId = this.workout.days[this.activeDayIndex];
      console.log(`deleted workout day ${oldDayId}. next day is ${nextWorkoutDayId}`);
      this.store.dispatch(new SelectWorkoutDay(
        {
          workoutId: this.workout.id.toString(),
          dayId: nextWorkoutDayId.toString()
        }));
    }
  }

  async actuallyDeleteWorkoutDay(index: number) {
    // WorkoutDay.delete(this.workout.days, index);
    await this.saveChanges();
    console.log(`deleted day index ${index} out of ${this.workout.days.length + 1} days`);
    this.store.dispatch(new WorkoutDayDeleted());
  }

  getWorkoutDayIndexById(id: string) {
    return this.workout.days.findIndex(day => day === id);
  }

}
