import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { WorkoutDay } from '../../models/WorkoutDay';
import { Exercise } from '../../models/Exercise';
import { DisplayMode, ExerciseAction  } from '../../models/enums';
import { ExerciseSwitchModeEvent } from '../../models/ExerciseSwitchModeEvent';
import { ExerciseActionEvent } from '../../models/ExerciseActionEvent';

@Component({
  selector: 'app-workout-day',
  templateUrl: './workout-day.component.html',
  styleUrls: ['./workout-day.component.scss'],
})
export class WorkoutDayComponent implements OnInit {

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

  get IsEditMode () { return this._displayMode === DisplayMode.Edit; }
  get IsDisplayMode () { return this._displayMode === DisplayMode.Display; }
  get IsWorkoutMode () { return this._displayMode === DisplayMode.Workout; }
  get IsDisplayOrWorkout () { return this.IsWorkoutMode || this.IsDisplayMode; }
  get IsDisplayOrEdit () { return this.IsEditMode || this.IsDisplayMode; }

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
            console.log('workout-day: receieved completed event: ', event.exerciseIndex);
            this.handleExerciseSetCompletion(event.exerciseIndex);
            break;
        case ExerciseAction.Delete:
            console.log('workout-day: receieved delete event: ', event.exercise);
            this.deleteExercise(event.exercise, event.workoutDayName);
            break;
        case ExerciseAction.Edit:
            console.log('workout-day: receieved edit event: ', event.exercise);
            break;
        case ExerciseAction.Run:
            console.log('workout-day: receieved run event: ', event.exerciseIndex);
            this.startExercise(event.exerciseIndex);
            break;
    }
  }

  deleteExercise(set: Exercise, day: string) {
      // this.workoutService.deleteExercise(set, this.workoutDay);
  }

  startOrStopToggle() {
    if (this.DisplayMode === DisplayMode.Display) {
      this.DisplayMode = DisplayMode.Workout;
      this.emitExerciseActionEvent(ExerciseAction.Run);
    } else {
      this.DisplayMode = DisplayMode.Display;
      this.emitExerciseActionEvent(ExerciseAction.Completed);
    }
  }

  editOrCancelToggle() {
    if (this.DisplayMode === DisplayMode.Display) {
      this.DisplayMode = DisplayMode.Edit;
      this.emitExerciseActionEvent(ExerciseAction.Edit);
    } else {
      this.DisplayMode = DisplayMode.Display;
      this.emitExerciseActionEvent(ExerciseAction.Completed);
    }
  }

  addExercise() {
    //c onst newExercise: Exercise = this.workoutService.getNewtWorkoutSet();
    // this.workoutDay.exercises.push(newExercise);
    this.saveChanges() ;
  }

  saveChanges() {
    this.DisplayMode = DisplayMode.Display;
    // this.toastr.info('Saved!');
  }

  finishWorkout (notify: boolean = true) {
      this.DisplayMode = DisplayMode.Display;
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
    runningExerciseIndex: number)  {
    const workoutEvent =
        new ExerciseSwitchModeEvent (displayMode, runningExerciseIndex, this.workoutDay.name);
    this.workoutDayPublisher.next(workoutEvent);
  }

  emitExerciseActionEvent(action: ExerciseAction) {
    this.outEventEmitter.emit(new ExerciseActionEvent(
        action,
        null,
        null,
        this.workoutDay.name));
  }

  reorderItems(indexes) {
    const exercise = this.workoutDay.exercises[indexes.from];
    this.workoutDay.exercises.splice(indexes.from, 1);
    this.workoutDay.exercises.splice(indexes.to, 0, exercise);
  }
}
