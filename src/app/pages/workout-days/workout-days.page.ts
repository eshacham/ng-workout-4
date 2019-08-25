import { Subject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides as Slides, NavController } from '@ionic/angular';
import { IAppState } from 'src/app/store/state/app.state';
import { Workout } from '../../models/Workout';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { ExerciseSetActionEvent } from '../../models/ExerciseActionEvent';
import { ExerciseSetAction } from '../../models/enums';
import { WorkoutDay } from '../../models/WorkoutDay';
import { SelectWorkout, SelectedWorkoutDay, DeleteWorkoutDay, UnselectWorkout } from 'src/app/store/actions/workouts.actions';
import { selectCurrentWorkoutSelectedDay } from 'src/app/store/selectors/workouts.selectors';
import { takeUntil } from 'rxjs/operators';
import { selectHasDefaultWorkoutsBeenReset } from 'src/app/store/selectors/defaults.selectors';

@Component({
  selector: 'app-workout-days',
  templateUrl: './workout-days.page.html',
  styleUrls: ['./workout-days.page.scss'],
})
export class WorkoutDaysPage implements OnInit, OnDestroy {

  workout: Workout;
  workoutId: number;
  activeDayIndex: number;
  isNewDayAdded: boolean;
  subs: Subscription;
  private ngUnsubscribeForWorkoutReset: Subject<void> = new Subject<void>();
  private ngUnsubscribeForWorkoutSelectedDay: Subject<void> = new Subject<void>();

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
    this.activeDayIndex = 0;
    this.subs = this.route.params.subscribe(params => {
      this.workoutId = +params.id;
      this.store.dispatch(new SelectWorkout(
        {
          currentWorkoutId: this.workoutId,
        }));
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
    this.store.dispatch(new SelectedWorkoutDay(
      {
        workoutId: this.workout.id,
        dayId: this.workout.days[this.activeDayIndex].id
      }));
  }

  ionViewWillEnter() {
    if (this.slides && this.workout) {
      this.store.select(selectCurrentWorkoutSelectedDay)
        .pipe(takeUntil(this.ngUnsubscribeForWorkoutSelectedDay))
        .subscribe(async (workoutDayId) => {
          if (workoutDayId) {
            console.log('workout days - redux - selectCurrentWorkoutSelectedDay:', workoutDayId);
            this.activeDayIndex = this.workout.days.findIndex(day => day.id === workoutDayId);
            const activeSlideIndex = await this.slides.getActiveIndex();
            if (activeSlideIndex !== this.activeDayIndex) {
              console.log('sliding to last selected day index:', this.activeDayIndex);
              await this.slides.slideTo(this.activeDayIndex, 0);
            }
          }
        });
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - workout days');
    this.subs.unsubscribe();
    this.ngUnsubscribeForWorkoutReset.next();
    this.ngUnsubscribeForWorkoutReset.complete();
    this.ngUnsubscribeForWorkoutSelectedDay.next();
    this.ngUnsubscribeForWorkoutSelectedDay.complete();
    this.store.dispatch(new UnselectWorkout());
  }

  get isLastDayActive(): boolean {
    return this.activeDayIndex === this.workout.days.length - 1;
  }
  get isFirstDayActive(): boolean {
    return this.activeDayIndex === 0;
  }
  get isOneDayOnly(): boolean {
    return this.workout.days.length === 1;
  }

  async slideChanged() {
    if (this.slides && this.workout) {
      this.activeDayIndex = await this.slides.getActiveIndex();
      this.store.dispatch(new SelectedWorkoutDay(
        {
          workoutId: this.workout.id,
          dayId: this.workout.days[this.activeDayIndex].id
        }));
    }
  }

  async saveChanges() {
    await this.dataService.saveWorkouts();
  }

  async handleWorkoutDayActionEvent(event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;

    switch (exerciseSetAction) {
      case ExerciseSetAction.Delete:
        console.log('workout-days: receieved delete event: ', JSON.stringify(event));
        console.log('workout-days: this.activeDayIndex: ', this.activeDayIndex);
        console.log('workout-days: this.workout.days: ', this.workout.days);
        if (!this.workout.days[this.activeDayIndex].exerciseSets.length) {
          await this.deleteWorkoutDay(this.activeDayIndex);
        }
        break;
      case ExerciseSetAction.AddDay:
        console.log('workout-days: receieved add day event: ', JSON.stringify(event));
        await this.addWorkoutDay(event.workoutDayId);
        break;
      case ExerciseSetAction.DeleteDay:
        console.log('workout-days: receieved delete day event: ', JSON.stringify(event));
        await this.deleteWorkoutDay(this.activeDayIndex);
        break;
      case ExerciseSetAction.MoveDayForward:
        console.log('workout-days: receieved move day forward event: ', JSON.stringify(event));
        await this.moveForwardWorkoutDay(this.activeDayIndex);
        break;
      case ExerciseSetAction.MoveDayBack:
        console.log('workout-days: receieved move day back event: ', JSON.stringify(event));
        await this.moveBackWorkoutDay(this.activeDayIndex);
        break;
    }
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
    const index = this.getWorkoutDayIndexByName(currentWorkoutDayId);
    console.log('splicing (insert) at ', index);
    this.isNewDayAdded = true;
    this.workout.days.splice(index + 1, 0, newDay);
    await this.slides.update();
    await this.saveChanges();
    console.log('sliding forward');
    await this.slides.slideNext(0);
  }

  private async deleteWorkoutDay(index: number) {
    if (this.workout.days.length > 1) {
      console.log('splicing (delete) at ', index);
      if (index > 0) {
        console.log('sliding back');
        await this.slides.slideTo(index - 1, 0, true);
      }
      const workDayId = this.workout.days[index].id;
      await this.actuallyDeleteWorkoutDay(index);
      this.store.dispatch(new DeleteWorkoutDay({
        workoutDayId: workDayId
      }));
      if (index <= 0) {
        this.store.dispatch(new SelectedWorkoutDay(
          {
            workoutId: this.workout.id,
            dayId: this.workout.days[this.activeDayIndex].id
          }));
      }
      await this.slides.update();
    }
  }

  async actuallyDeleteWorkoutDay(index: number) {
    WorkoutDay.delete(this.workout.days, index);
    await this.saveChanges();
    console.log(`deleted day index ${index} out of ${this.workout.days.length + 1} days`);
  }

  getWorkoutDayIndexByName(id: number) {
    return this.workout.days.findIndex(day => day.id === id);
  }

}
