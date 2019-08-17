import { Subject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides as Slides, NavController } from '@ionic/angular';
import { AppState } from 'src/app/store/reducers';
import { Workout } from '../../models/Workout';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { ExerciseSetSwitchModeEvent } from '../../models/ExerciseSwitchModeEvent';
import { ExerciseSetActionEvent } from '../../models/ExerciseActionEvent';
import { ExerciseSetAction, DisplayMode } from '../../models/enums';
import { WorkoutDay } from '../../models/WorkoutDay';
import * as WorkoutsAction from '../../store/actions/workouts.actions';

@Component({
  selector: 'app-workout-days',
  templateUrl: './workout-days.page.html',
  styleUrls: ['./workout-days.page.scss'],
})
export class WorkoutDaysPage implements OnInit, OnDestroy {

  workout: Workout;
  workoutId: number;
  workoutDaysPublisher: Subject<ExerciseSetSwitchModeEvent>;
  activeDayIndex: number;
  isNewDayAdded: boolean;
  subs: Subscription[];

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
    private store: Store<AppState>) {
    this.isNewDayAdded = false;
    this.activeDayIndex = 0;
    this.subs = [];
    this.workoutDaysPublisher = new Subject();
    this.subs.push(this.route.params.subscribe(params => {
      this.workoutId = +params.id;
    }));
  }

  async ngOnInit() {
    this.workout = await this.dataService.getWorkout(this.workoutId);
    this.store.dispatch(new WorkoutsAction.SetCurrentWorkoutId(
      {
        currentWorkoutId: this.workout.id,
      }));
    this.subs.push(this.dataService.getHasDefaultWorkoutsBeenReset()
    .subscribe(async (reset) => {
      console.log('workout days redux - HasDefaultWorkoutsBeenReset:', reset);
      if (reset) {
        console.log('workout-days: Workouts have been reset!: got to go back to workouts ');
        await this.navCtrl.navigateBack('/tabs/tab-workouts');
      }
    }));
  }

  ionViewWillEnter() {
    if (this.slides && this.workout) {
      this.subs.push(this.dataService.getCurrentWorkoutLastSelectedDay()
      .subscribe(async (workout) => {
        console.log('workout day redux - getCurrentWorkoutLastSelectedDay:', workout);
        if (workout) {
          this.activeDayIndex = workout.lastSelectedDay;
          console.log('last index on view loaded', this.activeDayIndex);
          await this.slides.slideTo(this.activeDayIndex, 0);
        }
      }));
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - workout days');
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
    this.subs = [];
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
      console.log('last index on slide changes', this.activeDayIndex);
      this.store.dispatch(new WorkoutsAction.SetLastSelectedWorkoutDay(
        {
          workoutId: this.workout.id,
          lastSelectedDay: this.activeDayIndex
        }));
    }
  }

  async saveChanges() {
    await this.dataService.saveWorkouts();
  }

  async handleWorkoutDayActionEvent(event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;

    switch (exerciseSetAction) {
      case ExerciseSetAction.Completed:
        console.log('workout-days: receieved completed event: ', JSON.stringify(event));
        break;
      case ExerciseSetAction.Delete:
        console.log('workout-days: receieved delete event: ', JSON.stringify(event));
        console.log('workout-days: this.activeDayIndex: ', this.activeDayIndex);
        console.log('workout-days: this.workout.days: ', this.workout.days);
        if (!this.workout.days[this.activeDayIndex].exerciseSets.length) {
          await this.deleteWorkoutDay(this.activeDayIndex);
        }
        break;
      case ExerciseSetAction.Edit:
        console.log('workout-days: receieved edit event: ', JSON.stringify(event));
        break;
      case ExerciseSetAction.Run:
        console.log('workout-days: receieved run event: ', JSON.stringify(event));
        this.publishWorkoutEvent(DisplayMode.Workout, event.workoutDayName);
        break;
      case ExerciseSetAction.Save:
        console.log('workout-days: receieved save event: ', JSON.stringify(event));
        break;
      case ExerciseSetAction.AddDay:
        console.log('workout-days: receieved add day event: ', JSON.stringify(event));
        await this.addWorkoutDay(event.workoutDayName);
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

  private async addWorkoutDay(currentWorkoutDayname: string) {
    let maxId = this.getMaxIdForWorkoutDays();
    const newDay = new WorkoutDay({ id: ++maxId, name: 'new workout day', exerciseSets: [] });
    const index = this.getWorkoutDayIndexByName(currentWorkoutDayname);
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
      } else {
        console.log('sliding forward');
        await this.slides.slideTo(1, 0, true);
      }
      /// TODO was reversed - very wiered!
      WorkoutDay.delete(this.workout.days, index);
      await this.saveChanges();
      await new Promise(() => setTimeout(() => {
        this.slides.update();
        console.log(`deleted day index ${index} out of ${this.workout.days.length + 1} days`);
      }, 1));
    }
  }

  getWorkoutDayIndexByName(name: string) {
    return this.workout.days.findIndex(d => d.name === name);
  }

  publishWorkoutEvent(displayMode: DisplayMode, runningExerciseDayName: string) {
    const workoutEvent =
      new ExerciseSetSwitchModeEvent(displayMode, null, runningExerciseDayName);
    this.workoutDaysPublisher.next(workoutEvent);
  }
}
