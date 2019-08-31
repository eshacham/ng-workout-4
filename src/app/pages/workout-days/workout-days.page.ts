import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides as Slides, NavController } from '@ionic/angular';
import { IAppState } from 'src/app/store/state/app.state';
import { Workout } from '../../models/Workout';
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
import { selectCurrentWorkoutSelectedDayId } from 'src/app/store/selectors/workouts.selectors';
import { selectWorkoutDayId2Delete } from 'src/app/store/selectors/workoutDays.selectors';
import { selectHasDefaultWorkoutsBeenReset } from 'src/app/store/selectors/defaults.selectors';
import { SelectWorkoutDayId2AddFrom, SelectworkoutDayMoveDirection } from 'src/app/store/selectors/workoutDays.selectors';

@Component({
  selector: 'app-workout-days',
  templateUrl: './workout-days.page.html',
  styleUrls: ['./workout-days.page.scss'],
})
export class WorkoutDaysPage implements OnInit, OnDestroy {

  workout: Workout;
  workoutId: number;
  isNewDayAdded: boolean;
  subs: Subscription;
  activeDayIndex = 0;
  private ngUnsubscribeForWorkoutReset: Subject<void> = new Subject<void>();
  private ngUnsubscribeForWorkoutSelectedDay: Subject<void> = new Subject<void>();
  private ngUnsubscribeForSelectWorkoutDayId2Delete: Subject<void> = new Subject<void>();
  private ngUnsubscribeForSelectWorkoutId2AddDay: Subject<void> = new Subject<void>();
  private ngUnsubscribeForSelectWorkoutDayMoveDirection: Subject<void> = new Subject<void>();

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
    private dataService: DataServiceProvider,
    private store: Store<IAppState>) {
    this.isNewDayAdded = false;
    this.subs = this.route.params.subscribe(params => {
      this.workoutId = +params.id;
      this.store.dispatch(new SelectWorkout({ workoutId: this.workoutId }));
    });
  }

  async ngOnInit() {
    this.workout = await this.dataService.getWorkout(this.workoutId);
    this.store.select(selectHasDefaultWorkoutsBeenReset)
      .pipe(takeUntil(this.ngUnsubscribeForWorkoutReset))
      .subscribe(async (reset) => {
        console.log('workout days redux - HasDefaultWorkoutsBeenReset:', reset);
        if (reset) {
          console.log('workout-days: Workouts have been reset!: got to go back to workouts ');
          await this.navCtrl.navigateBack('/tabs/tab-workouts');
        }
      });
    this.store.select(selectWorkoutDayId2Delete)
      .pipe(takeUntil(this.ngUnsubscribeForSelectWorkoutDayId2Delete))
      .subscribe(async (dayId) => {
        console.log('workout days redux - selectWorkoutDayId2Delete:', dayId);
        if (dayId) {
          this.deleteWorkoutDay(dayId);
        }
      });
    this.store.select(SelectWorkoutDayId2AddFrom)
      .pipe(takeUntil(this.ngUnsubscribeForSelectWorkoutId2AddDay))
      .subscribe(async (dayId) => {
        console.log('workout days redux - SelectWorkoutId2AddDay:', dayId);
        if (dayId) {
          await this.addWorkoutDay(dayId);
        }
      });
    this.store.select(SelectworkoutDayMoveDirection)
      .pipe(takeUntil(this.ngUnsubscribeForSelectWorkoutDayMoveDirection))
      .subscribe(async (direction) => {
        console.log('workout days redux - SelectworkoutDayMoveDirection:', direction);
        if (direction) {
          await this.moveWorkoutDay(direction);
        }
      });
  }

  ionViewWillEnter() {
    this.store.select(selectCurrentWorkoutSelectedDayId)
      .pipe(takeUntil(this.ngUnsubscribeForWorkoutSelectedDay))
      .subscribe(async (selectedWorkoutDayState) => {
        if (this.slides && this.workout && selectedWorkoutDayState &&
          selectedWorkoutDayState.workoutId === this.workoutId) {
          const dayId = selectedWorkoutDayState.dayId;
          console.log('workout days - redux - selectCurrentWorkoutSelectedDay:', dayId);
          const lastWorkoutDayIndex = this.workout.days.findIndex(day => day.id === dayId);
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
    this.ngUnsubscribeForWorkoutReset.next();
    this.ngUnsubscribeForWorkoutReset.complete();
    this.ngUnsubscribeForSelectWorkoutDayId2Delete.next();
    this.ngUnsubscribeForSelectWorkoutDayId2Delete.complete();
    this.ngUnsubscribeForWorkoutSelectedDay.next();
    this.ngUnsubscribeForWorkoutSelectedDay.complete();
    this.ngUnsubscribeForSelectWorkoutId2AddDay.next();
    this.ngUnsubscribeForSelectWorkoutId2AddDay.complete();
    this.ngUnsubscribeForSelectWorkoutDayMoveDirection.next();
    this.ngUnsubscribeForSelectWorkoutDayMoveDirection.complete();
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
          workoutId: this.workout.id,
          dayId: this.workout.days[this.activeDayIndex].id
        }));
    }
  }

  async saveChanges() {
    await this.dataService.saveWorkouts();
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

  getMaxIdForWorkoutDays(): number {
    const maxDayId = Math.max(...this.workout.days.map(d => d.id));
    return maxDayId;
  }

  private async addWorkoutDay(currentWorkoutDayId: number) {
    let maxId = this.getMaxIdForWorkoutDays();
    const newDay = new WorkoutDay({ id: ++maxId, name: 'new workout day', exerciseSets: [] });
    const index = this.getWorkoutDayIndexById(currentWorkoutDayId);
    console.log('splicing (insert) at ', index);
    this.isNewDayAdded = true;
    this.workout.days.splice(index + 1, 0, newDay);
    await this.slides.update();
    await this.saveChanges();
    console.log('sliding forward');
    await this.slides.slideNext(0);
    this.store.dispatch(new WorkoutDayAdded({ workoutDayId: newDay.id }));
  }

  private async deleteWorkoutDay(dayId: number) {
    if (this.workout.days.length > 1) {
      const index = this.workout.days.findIndex(day => day.id === dayId);
      console.log('splicing (delete) at ', index);
      const oldDayId = this.workout.days[index].id;
      await this.actuallyDeleteWorkoutDay(index);
      await this.slides.update();
      this.activeDayIndex = await this.slides.getActiveIndex();
      const nextWorkoutDayId = this.workout.days[this.activeDayIndex].id;
      console.log(`deleted workout day ${oldDayId}. next day is ${nextWorkoutDayId}`);
      this.store.dispatch(new SelectWorkoutDay(
        {
          workoutId: this.workout.id,
          dayId: nextWorkoutDayId
        }));
    }
  }

  async actuallyDeleteWorkoutDay(index: number) {
    WorkoutDay.delete(this.workout.days, index);
    await this.saveChanges();
    console.log(`deleted day index ${index} out of ${this.workout.days.length + 1} days`);
    this.store.dispatch(new WorkoutDayDeleted());
  }

  getWorkoutDayIndexById(id: number) {
    return this.workout.days.findIndex(day => day.id === id);
  }

}
