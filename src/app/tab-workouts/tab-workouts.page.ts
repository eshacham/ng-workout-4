import { Component, OnInit, Input } from '@angular/core';
import { Workout } from '../models/Workout';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { DisplayMode } from '../models/enums';
import { WorkoutDay } from '../models/WorkoutDay';
import { Subject } from 'rxjs';
import { ExerciseSetSwitchModeEvent } from '../models/ExerciseSwitchModeEvent';

@Component({
  selector: 'app-tab-workouts',
  templateUrl: 'tab-workouts.page.html',
  styleUrls: ['tab-workouts.page.scss']
})
export class TabWorkoutsPage implements OnInit {
  workouts: Workout[];
  displayMode = DisplayMode;
  private _displayMode: DisplayMode = DisplayMode.Display;
  workoutPublisher: Subject<ExerciseSetSwitchModeEvent>;

  constructor (
    private dataServiceProvider: DataServiceProvider) {
      this.workoutPublisher = new Subject();
    }

  async ngOnInit() {
    this.workouts = await this.dataServiceProvider.getWorkouts();
  }

  get DisplayMode(): DisplayMode {
    return this._displayMode;
  }
  set DisplayMode(val: DisplayMode) {
    if (this._displayMode !== val) {
      this._displayMode = val;
      this.publishWorkoutEvent(this._displayMode);
      if (this.DisplayMode === DisplayMode.Display) {
        this.dataServiceProvider.saveWorkouts();
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

  addWorkout() {
    const newWrokout = new Workout();
    newWrokout.id = Math.max(...this.workouts.map(w => w.id)) + 1;
    newWrokout.name = 'new workout name';
    newWrokout.description = 'new workout description';
    const day = new WorkoutDay();
    day.exerciseSets = [];
    newWrokout.days = [day];
    this.workouts.push(newWrokout);
    this.dataServiceProvider.saveWorkouts();
  }

  publishWorkoutEvent(
    displayMode: DisplayMode) {
    const workoutEvent =
      new ExerciseSetSwitchModeEvent(displayMode, null, null);
    this.workoutPublisher.next(workoutEvent);
  }
}
