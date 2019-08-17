import { Subject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IonFab } from '@ionic/angular';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Workout } from '../models/Workout';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { DisplayMode, ExerciseSetAction } from '../models/enums';
import { WorkoutDay } from '../models/WorkoutDay';
import { ExerciseSetSwitchModeEvent } from '../models/ExerciseSwitchModeEvent';
import { ExerciseSetActionEvent } from '../models/ExerciseActionEvent';
import { AppState } from '../store/reducers';
import * as DefeaultsActions from '../store/actions/defaults.actions';

@Component({
  selector: 'app-tab-workouts',
  templateUrl: 'tab-workouts.page.html',
  styleUrls: ['tab-workouts.page.scss']
})
export class TabWorkoutsPage implements OnInit {

  @ViewChild('fabEdit') fabEdit: IonFab;
  workouts: Workout[];
  displayMode = DisplayMode;
  private _displayMode: DisplayMode = DisplayMode.Display;
  workoutPublisher: Subject<ExerciseSetSwitchModeEvent>;

  constructor(
    private dataService: DataServiceProvider,
    private store: Store<AppState>) {
    this.workoutPublisher = new Subject();
  }

  async ngOnInit() {
    this.dataService.getHasDefaultWorkoutsBeenReset().subscribe(reset => {
      console.log('tab-workouts redux - HasDefaultWorkoutsBeenReset:', reset);
    });
  }

  async ionViewWillEnter() {
    this.workouts = await this.dataService.getWorkouts();
    this.store.dispatch(new DefeaultsActions.LoadedDefaultWorkouts());
  }

  get DisplayMode(): DisplayMode {
    return this._displayMode;
  }
  set DisplayMode(val: DisplayMode) {
    if (this._displayMode !== val) {
      this._displayMode = val;
      this.publishWorkoutEvent(this._displayMode);
      if (this.DisplayMode === DisplayMode.Display) {
        this.dataService.saveWorkouts();
      }
    }
  }

  editWorkouts() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
        this.DisplayMode = DisplayMode.Edit;
        break;
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Display;
        break;
    }
  }

  async addWorkout(event: any) {
    const newWorkout = new Workout({
      id: Math.max(...this.workouts.map(w => w.id)) + 1,
      name: 'new workout',
      description: 'describe the workout',
      days: [
        new WorkoutDay({ id: 1, name: 'workout day name', exerciseSets: [] })
      ]
    });
    this.workouts.push(newWorkout);
    event.stopPropagation();
    await new Promise(() => setTimeout(() => {
      this.DisplayMode = DisplayMode.Edit;
      this.publishWorkoutEvent(this._displayMode);
      this.dataService.saveWorkouts();
    }, 1));

  }

  publishWorkoutEvent(
    displayMode: DisplayMode) {
    const workoutEvent =
      new ExerciseSetSwitchModeEvent(displayMode, null, null);
    this.workoutPublisher.next(workoutEvent);
  }

  async handleWorkoutCardActionEvent(event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;
    switch (exerciseSetAction) {
      case ExerciseSetAction.Delete:
        if (this.workouts.length > 1) {
          const index = this.workouts.findIndex(w => w.id === event.exerciseSetIndex);
          const workout = this.workouts[index];
          if (workout.days.length) {
            workout.days.forEach((day, idx) => {
              WorkoutDay.delete(workout.days, idx);
            });
          }
          this.workouts.splice(index, 1);
          await this.dataService.saveWorkouts();
        }
        break;
    }
  }
}
