import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { ExerciseSetSwitchModeEvent } from 'src/app/models/ExerciseSwitchModeEvent';
import { Exercise } from 'src/app/models/Exercise';
import { ExerciseSetActionEvent } from 'src/app/models/ExerciseActionEvent';
import { DisplayMode, WeightUnit, ExerciseSetAction } from 'src/app/models/enums';
import { ExerciseSet } from 'src/app/models/ExerciseSet';
import { Rep } from 'src/app/models/Rep';
import { ExerciseThumbnailPopoverComponent } from '../exercise-thumbnail-popover/exercise-thumbnail-popover.component';

@Component({
  selector: 'app-exercise-thumbnail',
  templateUrl: './exercise-thumbnail.component.html',
  styleUrls: ['./exercise-thumbnail.component.scss'],
})
export class ExerciseThumbnailComponent implements OnInit, OnDestroy {
  constructor (private popoverCtrl: PopoverController) {}

  @Input() workoutDayName: string;
  @Input() exerciseSet: ExerciseSet;
  @Input() exerciseSetIndex: number;
  @Input() inWorkoutDayPublisher: Subject<ExerciseSetSwitchModeEvent>;
  @Output() outEventEmitter = new EventEmitter<ExerciseSetActionEvent>();

  MAXREPS = 5;
  MINREPS = 1;

  activeRepIndex = 0;

  get isPrevRepAvailable(): boolean {
    return this.activeRepIndex > 0 ||
    this.timedRepRemaining > 0 ||
    this.timedRestRemaining > 0;
}

  _timedRepRemaining = 0;
  timedRepTimer = null;
  get timedRepRemaining(): number { return this._timedRepRemaining; }

  _timedToRestAfterCurrentRep = 0;
  get timedToRestAfterCurrentRep(): number { return this._timedToRestAfterCurrentRep; }
  _timedRestRemaining = 0;
  timedRestTimer = null;
  get timedRestRemaining(): number { return this._timedRestRemaining; }

  getDisplayTimedRepRemaining(index: number): string {
    if (index === this.activeRepIndex) {
        return `${this.timedRepRemaining}/${this.exerciseSet.exercises[0].reps[index].seconds}`;
    } else {
        return `${this.exerciseSet.exercises[0].reps[index].seconds}`;
    }
  }

  displayMode = DisplayMode;
  weightUnit = WeightUnit;

  private _isOpen = false;
  get IsOpen(): boolean { return this._isOpen; }
  set IsOpen (val: boolean) {
      this._isOpen = val;
  }

  get OpenedExercises(): Exercise[] {
      return this.IsOpen ? this.exerciseSet.exercises : [];
  }

  private _isRunning = false;
  get IsRunning(): boolean { return this._isRunning; }
  set IsRunning (val: boolean) {
      this._isRunning = val;
  }
  private _isEditing = false;
  get IsEditing(): boolean { return this._isEditing; }
  set IsEditing (val: boolean) {
      this._isEditing = val;
  }

  private _displayMode: DisplayMode = DisplayMode.Display;
  get DisplayMode(): DisplayMode {
      return this._displayMode;
  }
  set DisplayMode(val: DisplayMode) {
      if (this._displayMode !== val) {
          this._displayMode = val;
      }
      if (this._displayMode === DisplayMode.Workout && this.IsRunning) {
          this.startWorkout();
      } else {
          this.stopRepTimer();
          this.stopRestTimer();
      }
  }
  get isEditMode(): boolean {
      return this._displayMode === DisplayMode.Edit;
  }

  private _isFrozen: boolean;
  get IsFrozen(): boolean { return this._isFrozen; }
  set IsFrozen(val: boolean) {this._isFrozen = val; }

  completedReps: number[] = [];

  toggleOpen() {
      this.IsOpen = !this.IsOpen;
  }

  ngOnInit() {
      this.inWorkoutDayPublisher.subscribe(event => this.handleWorkoutEventchange(event));

      this.exerciseSet.exercises.forEach(set => {
          set.reps.forEach(rep => {
              if (!rep.weightUnit) {
                  rep.weightUnit = WeightUnit.Lbs;
              }
          });
      });
    }

  handleWorkoutEventchange(event: ExerciseSetSwitchModeEvent) {
      this.IsRunning =
          (event.runningExerciseSetIndex === this.exerciseSetIndex &&
          event.runningExerciseSetDayName === this.workoutDayName);
      this.DisplayMode = event.displayMode;
  }

  ngOnDestroy() {
    // needed if child gets re-created (eg on some model changes)
    // note that subsequent subscriptions on the same subject will fail
    // so the parent has to re-create parentSubject on changes
    this.inWorkoutDayPublisher.unsubscribe();
  }

  toggleEditExercise() {
    this.IsEditing = !this.IsEditing;
    this.emitExerciseSetActionEvent(ExerciseSetAction.Edit);
  }

  runExercise() {
      this.emitExerciseSetActionEvent(ExerciseSetAction.Run);
  }

  deleteExercise() {
      this.emitExerciseSetActionEvent(ExerciseSetAction.Delete);
  }

  switchExercises(index: number) {
      const exercise = this.exerciseSet.exercises[index];
      this.exerciseSet.exercises.splice(index, 1);
      this.exerciseSet.exercises.splice(index + 1, 0, exercise);
  }

  deleteExerciseSet(index: number) {
      this.exerciseSet.exercises.splice(index, 1);
      if (!this.exerciseSet.exercises.length) {
          this.deleteExercise();
      }
  }

  completeExercise () {
      this.emitExerciseSetActionEvent(ExerciseSetAction.Completed);
  }

  emitExerciseSetActionEvent(action: ExerciseSetAction) {
      this.outEventEmitter.emit(new ExerciseSetActionEvent(
          action,
          this.exerciseSet,
          this.exerciseSetIndex,
          this.workoutDayName));
  }

  isTimedRepRemaining(repIndex: number): boolean {
    return this.activeRepIndex === repIndex &&
            this._timedRepRemaining > 0 && this.IsRunning ;
  }

  get isResting(): boolean {
      return this._timedRestRemaining > 0 && this.IsRunning ;
  }

  get hasSet(): boolean {
      return this.exerciseSet.exercises.length > 1;
  }

  exerciseSetSelected() {
      if (this.DisplayMode === DisplayMode.Workout) {
          if (!this.IsRunning && !this.IsFrozen) {
              console.log(`Display Exercise ${this.exerciseSet.exercises[0].name} and freezing`);
              this.IsFrozen = true;
          } else {
              console.log(`Collapse Exercise ${this.exerciseSet.exercises[0].name} and unfreezing`);
              this.IsFrozen = false;
          }
      }
  }

  isFirstInSet(exercise: Exercise): boolean {
      return this.hasSet && this.exerciseSet.exercises[0] === exercise;
  }

  isLastInSet(exercise: Exercise): boolean {
      return this.hasSet && this.exerciseSet.exercises[this.exerciseSet.exercises.length - 1] === exercise;
  }

  isNotLastInSet(exercise: Exercise): boolean {
      return this.hasSet && this.exerciseSet.exercises[this.exerciseSet.exercises.length - 1] !== exercise;
  }

  isFirstSet(exercise: Exercise): boolean {
      return !this.hasSet || this.isFirstInSet(exercise);
  }

  isLastSet(exerciseSet: Exercise): boolean {
      return !this.hasSet || this.isLastInSet(exerciseSet);
  }

  getTopBottomMarginClass(exercise: Exercise) {
      if (this.isFirstInSet(exercise)) {
          return ['noBottomMargin'];
      } else {
          return ['noTopMargin'];
      }
  }

  getRunningExerciseSetRepCellClass(repIndex: number) {
      const classes = [];
      if (this.activeRepIndex === repIndex) {
          classes.push('activeRep', 'fadeOutAndIn');
      } else {
          classes.push('nonActiveRep');
      }
      return classes;
  }

  startWorkout() {
      this.IsFrozen = false;
      this.resetCompletedReps();
      this.startTimedRep();
  }

  private resetCompletedReps() {
      this.completedReps.length = 0;
      this.activeRepIndex = 0;
  }

  private startTimedRep() {
      // this.audioService.playStartWorkout();
      this.stopRepTimer();
      this._timedRepRemaining = this.exerciseSet.exercises[0].reps[this.activeRepIndex].seconds;
      if (this._timedRepRemaining) {
          this.timedRepTimer = setInterval(() => {
              this._timedRepRemaining --;
              if (this._timedRepRemaining <= 0) {
                  this.stopRepTimer();
                  this.nextRep(true);
              }
          }, 1000);
      }
  }

  private stopRepTimer() {
      if (this.timedRepTimer) {
          clearInterval(this.timedRepTimer);
      }
  }

  private startTimedRest(callbackAction) {
      // audioService.playStartWorkout();
      this.stopRestTimer();
      this._timedRestRemaining = this._timedToRestAfterCurrentRep;
      if (this._timedRestRemaining) {
          this.timedRestTimer = setInterval(() => {
              this._timedRestRemaining --;
              if (this._timedRestRemaining <= 0) {
                  this.stopRestTimer();
                  callbackAction();
              }
          }, 1000);
      }
  }

  private stopRestTimer() {
      if (this.timedRestTimer) {
          clearInterval(this.timedRestTimer);
      }
  }

  prevRep () {
      if (this.activeRepIndex > 0) {
          this.completedReps.pop();
          this.activeRepIndex--;
      }
      this.stopRepTimer();
      this.stopRestTimer();
      this.startTimedRep();
  }

  skipRest() {
      this._timedRestRemaining = 0;
  }

  private activateNextRep() {
      this.activeRepIndex++;
      this.startTimedRep();
  }

  nextRep (shouldRest: boolean) {
      if (!this.isRepCompleted (this.activeRepIndex)) {
          this.completedReps.push(this.activeRepIndex);
      }
      this.stopRepTimer();
      this._timedRepRemaining = 0;
      if (this.exerciseSet.exercises[0].reps.length - 1 > this.activeRepIndex) {
          if (shouldRest) {
              this._timedToRestAfterCurrentRep = this.exerciseSet.exercises[0].restBetweenReps;
              this.startTimedRest(() => this.activateNextRep());
          } else {
              this.skipRest();
              this.activateNextRep();
          }
      } else {
          this.stopRepTimer();
          if (shouldRest) {
              this._timedToRestAfterCurrentRep = this.exerciseSet.exercises[0].restAfterExercise;
              this.startTimedRest(() => this.completeExercise());
          } else {
              this.completeExercise();
          }
      }
  }

  isRepCompleted (index) {
      return this.completedReps.includes(index);
  }

  addRep(index: number) {
      if (!this.isMaxReps) {
          this.exerciseSet.exercises.forEach(set => {
              const newRep: Rep = new Rep();
              newRep.weight = set.reps[index].weight;
              newRep.weightUnit = set.reps[index].weightUnit,
              newRep.times = set.reps[index].times,
              newRep.seconds = set.reps[index].seconds;
              set.reps.splice(index, 0, newRep );
          });
      }
  }

  deleteRep(index: number) {
      if (!this.isMinReps) {
          this.exerciseSet.exercises.forEach(set => {
              set.reps.splice(index, 1);
          });
      }
  }

  get isMaxReps(): boolean {
      return this.exerciseSet.exercises[0].reps.length === this.MAXREPS;
  }

  get isMinReps(): boolean {
      return this.exerciseSet.exercises[0].reps.length === this.MINREPS;
  }

  async presentPopover(event: Event, rep: Rep) {
    const popover = await this.popoverCtrl.create({
      component: ExerciseThumbnailPopoverComponent,
      event: event,
      componentProps: { rep: rep }
    });
    popover.present();
  }

}
