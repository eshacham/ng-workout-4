import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Exercise } from 'src/app/models/Exercise';
import { Subject } from 'rxjs';
import { ExerciseSwitchModeEvent } from 'src/app/models/ExerciseSwitchModeEvent';
import { ExerciseActionEvent } from 'src/app/models/ExerciseActionEvent';
import { PopoverController } from '@ionic/angular';
import { DisplayMode, WeightUnit, ExerciseAction } from 'src/app/models/enums';
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
  @Input() exercise: Exercise;
  @Input() exerciseIndex: number;
  @Input() inWorkoutDayPublisher: Subject<ExerciseSwitchModeEvent>;
  @Output() outEventEmitter = new EventEmitter<ExerciseActionEvent>();

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
        return `${this.timedRepRemaining}/${this.exercise.sets[0].reps[index].seconds}`;
    } else {
        return `${this.exercise.sets[0].reps[index].seconds}`;
    }
  }

  displayMode = DisplayMode;
  weightUnit = WeightUnit;

  private _isOpen = false;
  get IsOpen(): boolean { return this._isOpen; }
  set IsOpen (val: boolean) {
      this._isOpen = val;
  }

  get OpenedExerciseSets(): ExerciseSet[] {
      return this.IsOpen ? this.exercise.sets : [];
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

      this.exercise.sets.forEach(set => {
          set.reps.forEach(rep => {
              if (!rep.weightUnit) {
                  rep.weightUnit = WeightUnit.Lbs;
              }
          });
      });
    }

  handleWorkoutEventchange(event: ExerciseSwitchModeEvent) {
      this.IsRunning =
          (event.runningExerciseIndex === this.exerciseIndex &&
          event.runningExerciseDayName === this.workoutDayName);
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
    this.emitExerciseActionEvent(ExerciseAction.Edit);
  }

  runExercise() {
      this.emitExerciseActionEvent(ExerciseAction.Run);
  }

  deleteExercise() {
      this.emitExerciseActionEvent(ExerciseAction.Delete);
  }

  switchExerciseSets(index: number) {
      const exerciseSet = this.exercise.sets[index];
      this.exercise.sets.splice(index, 1);
      this.exercise.sets.splice(index + 1, 0, exerciseSet);
  }

  deleteExerciseSet(index: number) {
      this.exercise.sets.splice(index, 1);
      if (!this.exercise.sets.length) {
          this.deleteExercise();
      }
  }

  completeExercise () {
      this.emitExerciseActionEvent(ExerciseAction.Completed);
  }

  emitExerciseActionEvent(action: ExerciseAction) {
      this.outEventEmitter.emit(new ExerciseActionEvent(
          action,
          this.exercise,
          this.exerciseIndex,
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
      return this.exercise.sets.length > 1;
  }

  exerciseSelected() {
      if (this.DisplayMode === DisplayMode.Workout) {
          if (!this.IsRunning && !this.IsFrozen) {
              console.log(`Display Exercise ${this.exercise.sets[0].name} and freezing`);
              this.IsFrozen = true;
          } else {
              console.log(`Collapse Exercise ${this.exercise.sets[0].name} and unfreezing`);
              this.IsFrozen = false;
          }
      }
  }

  isFirstInSet(exerciseSet: ExerciseSet): boolean {
      return this.hasSet && this.exercise.sets[0] === exerciseSet;
  }

  isLastInSet(exerciseSet: ExerciseSet): boolean {
      return this.hasSet && this.exercise.sets[this.exercise.sets.length - 1] === exerciseSet;
  }

  isNotLastInSet(exerciseSet: ExerciseSet): boolean {
      return this.hasSet && this.exercise.sets[this.exercise.sets.length - 1] !== exerciseSet;
  }

  isFirstSet(exerciseSet: ExerciseSet): boolean {
      return !this.hasSet || this.isFirstInSet(exerciseSet);
  }

  isLastSet(exerciseSet: ExerciseSet): boolean {
      return !this.hasSet || this.isLastInSet(exerciseSet);
  }

  getTopBottomMarginClass(exerciseSet: ExerciseSet) {
      if (this.isFirstInSet(exerciseSet)) {
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
      this._timedRepRemaining = this.exercise.sets[0].reps[this.activeRepIndex].seconds;
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
      if (this.exercise.sets[0].reps.length - 1 > this.activeRepIndex) {
          if (shouldRest) {
              this._timedToRestAfterCurrentRep = this.exercise.sets[0].restBetweenReps;
              this.startTimedRest(() => this.activateNextRep());
          } else {
              this.skipRest();
              this.activateNextRep();
          }
      } else {
          this.stopRepTimer();
          if (shouldRest) {
              this._timedToRestAfterCurrentRep = this.exercise.sets[0].restAfterExercise;
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
          this.exercise.sets.forEach(set => {
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
          this.exercise.sets.forEach(set => {
              set.reps.splice(index, 1);
          });
      }
  }

  get isMaxReps(): boolean {
      return this.exercise.sets[0].reps.length === this.MAXREPS;
  }

  get isMinReps(): boolean {
      return this.exercise.sets[0].reps.length === this.MINREPS;
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
