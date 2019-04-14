import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { WorkoutDay } from '../../models/WorkoutDay';
import { Exercise } from '../../models/Exercise';
import { DisplayMode, ExerciseAction } from '../../models/enums';
import { ExerciseSwitchModeEvent } from '../../models/ExerciseSwitchModeEvent';
import { ExerciseActionEvent } from '../../models/ExerciseActionEvent';
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
  @Input() inWorkoutDaysPublisher: Subject<ExerciseSwitchModeEvent>;
  @Output() outEventEmitter = new EventEmitter<ExerciseActionEvent>();

  workoutDayPublisher: Subject<ExerciseSwitchModeEvent> = new Subject();
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

  handleWorkoutEventchange(event: ExerciseSwitchModeEvent) {
    if (event.runningExerciseDayName !== this.workoutDay.name) {
      this.finishWorkout(false);
    }
  }

  OnDestroy() {
    // needed if child gets re-created (eg on some model changes)
    // note that subsequent subscriptions on the same subject will fail
    // so the parent has to re-create parentSubject on changes
    this.inWorkoutDaysPublisher.unsubscribe();
  }

  handleExerciseActionEvent(event: ExerciseActionEvent) {
    const exerciseAction: ExerciseAction = event.action;
    switch (exerciseAction) {
      case ExerciseAction.Completed:
        console.log('workout-day: receieved completed event: ', JSON.stringify(event));
        this.handleExerciseSetCompletion(event.exerciseIndex);
        break;
      case ExerciseAction.Delete:
        console.log('workout-day: receieved delete event: ', JSON.stringify(event));
        this.deleteExercise(event.exercise, event.workoutDayName);
        break;
      case ExerciseAction.Edit:
        console.log('workout-day: receieved edit event: ', JSON.stringify(event));
        break;
      case ExerciseAction.Run:
        console.log('workout-day: receieved run event: ', JSON.stringify(event));
        this.startExercise(event.exerciseIndex);
        break;
    }
  }

  deleteExercise(set: Exercise, day: string) {
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
        this.emitExerciseActionEvent(ExerciseAction.Completed);
        break;
      case DisplayMode.Workout:
        this.fabEdit.close();
        this.emitExerciseActionEvent(ExerciseAction.Run);
        break;
      case DisplayMode.Edit:
        this.fabWorkout.close();
        this.emitExerciseActionEvent(ExerciseAction.Edit);
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
    if (this.workoutDay.exercises.length > exerciseSetIndex) {
      this.startExercise(exerciseSetIndex + 1);
    } else {
      this.finishWorkout();
    }
  }

  startExercise(exerciseIndex: number) {
    this.publishWorkoutEvent(DisplayMode.Workout, exerciseIndex);
  }

  publishWorkoutEvent(displayMode: DisplayMode,
    runningExerciseIndex: number) {
    const workoutEvent =
      new ExerciseSwitchModeEvent(displayMode, runningExerciseIndex, this.workoutDay.name);
    this.workoutDayPublisher.next(workoutEvent);
  }

  emitExerciseActionEvent(action: ExerciseAction) {
    this.outEventEmitter.emit(new ExerciseActionEvent(
      action,
      null,
      null,
      this.workoutDay.name));
  }

  reorderItems(event: CustomEvent<ItemReorderEventDetail>) {
    const from = event.detail.from;
    const to = event.detail.to;
    console.log(`Moving item from ${from} to ${to}`);
    const exercise = this.workoutDay.exercises[from];
    this.workoutDay.exercises.splice(from, 1);
    this.workoutDay.exercises.splice(to, 0, exercise);
    event.detail.complete(true);
  }
}
