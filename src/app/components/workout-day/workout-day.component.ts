import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { WorkoutDay } from '../../models/WorkoutDay';
import { ExerciseSet } from '../../models/ExerciseSet';
import { DisplayMode, ExerciseSetAction } from '../../models/enums';
import { ExerciseSetSwitchModeEvent } from '../../models/ExerciseSwitchModeEvent';
import { ExerciseSetActionEvent } from '../../models/ExerciseActionEvent';
import { ItemReorderEventDetail } from '@ionic/core';
import { IonFab } from '@ionic/angular';

@Component({
  selector: 'app-workout-day',
  templateUrl: './workout-day.component.html',
  styleUrls: ['./workout-day.component.scss'],
})
export class WorkoutDayComponent implements OnInit {

  @ViewChild('fabWorkout') fabWorkout: IonFab;
  @ViewChild('fabEdit') fabEdit: IonFab;

  @Input() workoutDay: WorkoutDay;
  @Input() inWorkoutDaysPublisher: Subject<ExerciseSetSwitchModeEvent>;
  @Output() outEventEmitter = new EventEmitter<ExerciseSetActionEvent>();

  workoutDayPublisher: Subject<ExerciseSetSwitchModeEvent> = new Subject();
  runningExerciseIndex = 0;
  displayMode = DisplayMode;

  constructor() { }

  private _displayMode: DisplayMode = DisplayMode.Display;
  get DisplayMode(): DisplayMode {
    return this._displayMode;
  }
  set DisplayMode(val: DisplayMode) {
    if (this._displayMode !== val) {
      this._displayMode = val;
      if (this._displayMode === DisplayMode.Workout) {
        if (this.runningExerciseIndex === 0) {
          this.runningExerciseIndex = 1;
        }
      }
      this.publishWorkoutEvent(this._displayMode, this.runningExerciseIndex);
    }
  }

  get IsEditMode() { return this._displayMode === DisplayMode.Edit; }
  get IsDisplayMode() { return this._displayMode === DisplayMode.Display; }
  get IsWorkoutMode() { return this._displayMode === DisplayMode.Workout; }
  get IsDisplayOrWorkout() { return this.IsWorkoutMode || this.IsDisplayMode; }
  get IsDisplayOrEdit() { return this.IsEditMode || this.IsDisplayMode; }

  ngOnInit() {
    this.inWorkoutDaysPublisher.subscribe(event => this.handleWorkoutEventchange(event));
  }

  handleWorkoutEventchange(event: ExerciseSetSwitchModeEvent) {
    if (event.runningExerciseSetDayName !== this.workoutDay.name) {
      this.finishWorkout(false);
    }
  }

  OnDestroy() {
    // needed if child gets re-created (eg on some model changes)
    // note that subsequent subscriptions on the same subject will fail
    // so the parent has to re-create parentSubject on changes
    this.inWorkoutDaysPublisher.unsubscribe();
  }

  handleExerciseSetActionEvent(event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;
    switch (exerciseSetAction) {
      case ExerciseSetAction.Completed:
        console.log('workout-day: receieved completed event: ', JSON.stringify(event));
        this.handleExerciseSetCompletion(event.exerciseSetIndex);
        break;
      case ExerciseSetAction.Delete:
        console.log('workout-day: receieved delete event: ', JSON.stringify(event));
        this.deleteExerciseSet(event.exerciseSet, event.workoutDayName);
        break;
      case ExerciseSetAction.Edit:
        console.log('workout-day: receieved edit event: ', JSON.stringify(event));
        break;
      case ExerciseSetAction.Run:
        console.log('workout-day: receieved run event: ', JSON.stringify(event));
        this.startExerciseSet(event.exerciseSetIndex);
        break;
    }
  }

  deleteExerciseSet(set: ExerciseSet, day: string) {
    // this.workoutService.deleteExercise(set, this.workoutDay);
  }

  startWorkout() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
        this.DisplayMode = DisplayMode.Workout;
        break;
      case DisplayMode.Workout:
        this.DisplayMode = DisplayMode.Display;
        break;
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Workout;
        break;
    }
    this.emitExerciseActionEventByStatus();
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
    this.emitExerciseActionEventByStatus();
  }
  editWorkout() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
        this.DisplayMode = DisplayMode.Edit;
        break;
      case DisplayMode.Workout:
        this.DisplayMode = DisplayMode.Edit;
        break;
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Display;
        break;
    }
    this.emitExerciseActionEventByStatus();
  }
  cancelEditWorkout() {
    switch (this.DisplayMode) {
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Display;
        break;
      case DisplayMode.Display:
      case DisplayMode.Workout:
        break;
    }
    this.emitExerciseActionEventByStatus();
  }

  emitExerciseActionEventByStatus() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
        this.emitExerciseSetActionEvent(ExerciseSetAction.Completed);
        break;
      case DisplayMode.Workout:
        this.fabEdit.close();
        this.emitExerciseSetActionEvent(ExerciseSetAction.Run);
        break;
      case DisplayMode.Edit:
        this.fabWorkout.close();
        this.emitExerciseSetActionEvent(ExerciseSetAction.Edit);
    }
  }

  addExercise() {
    // const newExercise: Exercise = this.workoutService.getNewtWorkoutSet();
    // this.workoutDay.exercises.push(newExercise);
    this.saveChanges();
  }

  saveChanges() {
    this.cancelEditWorkout();
    // this.toastr.info('Saved!');
  }

  finishWorkout(notify: boolean = true) {
    this.stopWorkout();
    if (notify) {
      // this.toastr.success('Good Job!');
    }
  }

  handleExerciseSetCompletion(exerciseSetIndex: number) {
    if (this.workoutDay.exerciseSets.length > exerciseSetIndex) {
      this.startExerciseSet(exerciseSetIndex + 1);
    } else {
      this.finishWorkout();
    }
  }

  startExerciseSet(exerciseSetIndex: number) {
    this.publishWorkoutEvent(DisplayMode.Workout, exerciseSetIndex);
  }

  publishWorkoutEvent(displayMode: DisplayMode,
    runningExerciseIndex: number) {
    const workoutEvent =
      new ExerciseSetSwitchModeEvent(displayMode, runningExerciseIndex, this.workoutDay.name);
    this.workoutDayPublisher.next(workoutEvent);
  }

  emitExerciseSetActionEvent(action: ExerciseSetAction) {
    this.outEventEmitter.emit(new ExerciseSetActionEvent(
      action,
      null,
      null,
      this.workoutDay.name));
  }

  reorderItems(event: CustomEvent<ItemReorderEventDetail>) {
    const from = event.detail.from;
    const to = event.detail.to;
    console.log(`Moving item from ${from} to ${to}`);
    const set = this.workoutDay.exerciseSets[from];
    this.workoutDay.exerciseSets.splice(from, 1);
    this.workoutDay.exerciseSets.splice(to, 0, set);
    event.detail.complete(true);
  }
}
