import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser/';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PopoverController } from '@ionic/angular';
import { ExerciseSetSwitchModeEvent } from 'src/app/models/ExerciseSwitchModeEvent';
import { Exercise } from 'src/app/models/Exercise';
import { ExerciseSetActionEvent } from 'src/app/models/ExerciseActionEvent';
import { DisplayMode, WeightUnit, ExerciseSetAction } from 'src/app/models/enums';
import { ExerciseSet } from 'src/app/models/ExerciseSet';
import { Rep } from 'src/app/models/Rep';
import { ExerciseThumbnailPopoverComponent } from '../exercise-thumbnail-popover/exercise-thumbnail-popover.component';
import { ExerciseMedia } from 'src/app/models/ExerciseMedia';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { IWorkoutDayState } from 'src/app/store/state/workouts.state';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { SelectWorkoutDayState } from 'src/app/store/selectors/workouts.selectors';

const MAXREPS = 5;
const MINREPS = 1;

@Component({
    selector: 'app-exercise-thumbnail',
    templateUrl: './exercise-thumbnail.component.html',
    styleUrls: ['./exercise-thumbnail.component.scss'],
})
export class ExerciseThumbnailComponent implements OnInit, OnDestroy {
    activeRepIndex = 0;
    activeSetExerciseIndex = 0;
    _timedRepRemaining = 0;
    timedRepTimer = null;
    _timedToRestAfterCurrentRep = 0;
    _timedRestRemaining = 0;
    timedRestTimer = null;
    displayMode = DisplayMode;
    weightUnit = WeightUnit;

    private _isOpen = false;
    private _isRunning = false;
    private _isEditing = false;
    private _displayMode: DisplayMode = DisplayMode.Display;
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    @Input() workoutDayId: number;
    @Input() exerciseSet: ExerciseSet;
    @Input() exerciseSetIndex: number;
    @Input() isDayInEditMode: boolean;
    @Input() inWorkoutDayPublisher: Subject<ExerciseSetSwitchModeEvent>;
    @Output() outEventEmitter = new EventEmitter<ExerciseSetActionEvent>();

    get activeExercise(): Exercise {
        return this.exerciseSet.exercises[this.activeSetExerciseIndex];
    }

    get isPrevRepAvailable(): boolean {
        const isPrevAvail =
            this.activeRepIndex > 0 ||
            this.activeSetExerciseIndex > 0 ||
            this.timedRepRemaining > 0 ||
            this.timedRestRemaining > 0;
        return isPrevAvail;
    }

    get timedRepRemaining(): number { return this._timedRepRemaining; }

    get timedToRestAfterCurrentRep(): number { return this._timedToRestAfterCurrentRep; }

    get timedRestRemaining(): number { return this._timedRestRemaining; }

    get IsOpen(): boolean { return this._isOpen; }
    set IsOpen(val: boolean) {
        this._isOpen = val;
    }

    get OpenedExercises(): Exercise[] {
        return this.IsOpen ? this.exerciseSet.exercises : [];
    }

    get IsRunning(): boolean { return this._isRunning; }
    set IsRunning(val: boolean) {
        this._isRunning = val;
    }

    get IsEditing(): boolean { return this._isEditing; }
    set IsEditing(val: boolean) {
        this._isEditing = val;
    }

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

    constructor(
        private domSanitizer: DomSanitizer,
        private popoverCtrl: PopoverController,
        private store: Store<IAppState>) {
    }

    safeImage(media: ExerciseMedia): SafeUrl {
        if (media) {
            return this.domSanitizer.bypassSecurityTrustUrl(media.ionicPath);
        }
    }

    toggleOpen() {
        this.IsOpen = !this.IsOpen;
    }

    ngOnInit() {
        this.store.select(SelectWorkoutDayState)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(state => {
            if (state) {
                this.handleSetExerciseDisplayMode(state);
            }
        });
        // this.inWorkoutDayPublisher.subscribe(event => this.handleSetExerciseDisplayMode(event));
        if (this.isDayInEditMode) {
            this.DisplayMode = DisplayMode.Edit;
        }
        this.init();
    }

    ngOnDestroy() {
        console.log('onDestroy - exercise-thumbnail');
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    init() {
        this.exerciseSet.exercises.forEach((exercise) => {
            exercise.reps.forEach((rep) => {
                rep = new Rep({
                    weight: rep.weight,
                    weightUnit: rep.weightUnit,
                    times: rep.times,
                    seconds: rep.seconds
                });
            });
        });
        this.exerciseSet.exercises.forEach(set => {
            set.reps.forEach(rep => {
                if (!rep.weightUnit) {
                    rep.weightUnit = WeightUnit.Lbs;
                }
            });
        });
    }

    handleSetExerciseDisplayMode(state: IWorkoutDayState) {
        this.IsRunning =
            (state.id === this.workoutDayId &&
            state.runningExerciseSetIndex === this.exerciseSetIndex &&
            state.displayMode === DisplayMode.Workout);
        // tslint:disable-next-line: max-line-length
        console.log(`exercise-thumb ${this.exerciseSetIndex}: set display mode from ${DisplayMode[this.DisplayMode]} to ${DisplayMode[state.displayMode]}; running is ${this.IsRunning}`);
        this.DisplayMode = state.displayMode;
    }

    toggleEditExercise() {
        this.IsEditing = !this.IsEditing;
        this.emitExerciseSetActionEvent(ExerciseSetAction.Edit);
    }

    runExercise() {
        this.emitExerciseSetActionEvent(ExerciseSetAction.Run);
    }

    switchExercises(index: number) {
        const exercise = this.exerciseSet.exercises[index];
        this.exerciseSet.exercises.splice(index, 1);
        this.exerciseSet.exercises.splice(index + 1, 0, exercise);
    }

    deleteExerciseSet() {
        this.emitExerciseSetActionEvent(ExerciseSetAction.Delete);
    }

    deleteExercise(index: number) {
        Exercise.delete(this.exerciseSet.exercises, index);
        if (!this.exerciseSet.exercises.length) {
            this.deleteExerciseSet();
        }
    }

    completeExercise() {
        this.emitExerciseSetActionEvent(ExerciseSetAction.Completed);
    }

    emitExerciseSetActionEvent(action: ExerciseSetAction) {
        this.outEventEmitter.emit(new ExerciseSetActionEvent(
            action,
            this.exerciseSet,
            this.exerciseSetIndex,
            this.workoutDayId));
    }

    isTimedRepRemaining(repIndex: number): boolean {
        return this.activeRepIndex === repIndex &&
            this._timedRepRemaining > 0 && this.IsRunning;
    }

    get isResting(): boolean {
        return this._timedRestRemaining > 0 && this.IsRunning;
    }

    get hasSet(): boolean {
        return this.exerciseSet.exercises.length > 1;
    }

    exerciseSetSelected() {
    //     if (this.DisplayMode === DisplayMode.Workout) {
    //         if (!this.IsRunning && !this.IsFrozen) {
    //             console.log(`Display Exercise ${this.activeExercise.name} and freezing`);
    //             this.IsFrozen = true;
    //         } else {
    //             console.log(`Collapse Exercise ${this.activeExercise.name} and unfreezing`);
    //             this.IsFrozen = false;
    //         }
    //     }
     }

    isFirstInSet(exercise: Exercise): boolean {
        return this.hasSet && this.activeExercise === exercise;
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

    get hasTimedRep(): boolean {
        return this.exerciseSet.exercises.some((exe) => {
            return exe.reps.some((rep) => {
                return rep.seconds > 0;
            });
        });
    }
    get hasIncompleteTimedRepInActiveRep(): boolean {
        return this.exerciseSet.exercises.some((exe) => {
            const rep = exe.reps[this.activeRepIndex];
            return rep.seconds > 0 && !rep.isCompleted;
        });
    }
    get hasCompleteTimedRepInActiveRep(): boolean {
        return this.exerciseSet.exercises.some((exe) => {
            const rep = exe.reps[this.activeRepIndex];
            return rep.seconds > 0 && rep.isCompleted;
        });
    }
    isExecrciseSetActive(exerciseIndex: number): boolean {
        return exerciseIndex === this.activeSetExerciseIndex;
    }

    getRepClass(rep: Rep, exercise: Exercise) {
        const classes: string[] = ['nonActiveRep'];
        if (this.IsRunning) {
            if (rep.isActive) {
                // classes.push('activeRep');
                classes.push('fadeOutAndIn');
            } else { // non active rep
                if (!this.hasTimedRep &&
                    this.activeRepIndex === exercise.reps.indexOf(rep)) {
                    classes.push('fadeOutAndIn');
                }
            }
        }


        return classes;
    }

    getSecondsStateText(rep: Rep) {
        if (rep.isActive) {
            return `${this.timedRepRemaining}/${rep.seconds}`;
        } else {
            return `${rep.seconds}`;
        }
    }

    startWorkout() {
        // this.IsFrozen = false;
        this.activeSetExerciseIndex = 0;
        this.resetReps();
        this.startTimedRep();
    }

    private resetReps() {
        this.exerciseSet.exercises.forEach((exercise) => this.resetRepsState(exercise));
        this.activeRepIndex = 0;
        this.setExecrciseRepsActiveState(this.activeExercise, this.activeRepIndex);
    }

    private resetRepsState(exercise: Exercise) {
        exercise
            .reps.forEach((rep) => {
                rep.isActive = false;
                rep.isCompleted = false;
            });
    }

    private setExecrciseRepsActiveState(exercise: Exercise, index: number) {
        exercise
            .reps.forEach((rep, i) => {
                rep.isActive = (i === index);
            });
    }

    private InactiveExerciseReps(exercise: Exercise) {
        exercise
            .reps.forEach((rep, i) => {
                rep.isActive = false;
            });
    }

    private startTimedRep() {
        // this.audioService.playStartWorkout();
        this.stopRepTimer();
        this._timedRepRemaining = this.activeRep.seconds;
        if (this._timedRepRemaining) {
            this.timedRepTimer = setInterval(() => {
                this._timedRepRemaining--;
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
                this._timedRestRemaining--;
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

    prevRep() {
        this.stopRepTimer();
        this._timedRepRemaining = 0;
        if (this.activeSetExerciseIndex > 0 &&
            (this.hasCompleteTimedRepInActiveRep || this.hasIncompleteTimedRepInActiveRep)) {
            this.exerciseSet.exercises[this.activeSetExerciseIndex - 1].reps[this.activeRepIndex].isCompleted = false;
            this.activatePrevExercise();
        } else {
            if (this.activeRepIndex > 0) {
                this.exerciseSet.exercises.forEach(exercise => exercise.reps[this.activeRepIndex - 1].isCompleted = false);
            }
            this.activatePrevRep();
        }
        this.stopRestTimer();
        this.stopRepTimer();
        this.startTimedRep();
    }

    skipRest() {
        this._timedRestRemaining = 0;
    }
    private activateNextExercise() {
        this.InactiveExerciseReps(this.activeExercise);
        this.activeSetExerciseIndex++;
        this.setExecrciseRepsActiveState(this.activeExercise, this.activeRepIndex);
        this.startTimedRep();
    }
    private activatePrevExercise() {
        this.InactiveExerciseReps(this.activeExercise);
        this.activeSetExerciseIndex--;
        this.setExecrciseRepsActiveState(this.activeExercise, this.activeRepIndex);
        this.startTimedRep();
    }

    private activateNextRep() {
        this.InactiveExerciseReps(this.activeExercise);
        this.activeSetExerciseIndex = 0;
        this.setExecrciseRepsActiveState(this.activeExercise, ++this.activeRepIndex);
        this.startTimedRep();
    }
    private activatePrevRep() {
        if (this.activeRepIndex > 0) {
            this.InactiveExerciseReps(this.activeExercise);
            this.activeSetExerciseIndex = this.exerciseSet.exercises.length - 1;
            this.setExecrciseRepsActiveState(this.activeExercise, --this.activeRepIndex);
        }
        this.startTimedRep();
    }

    nextRep(shouldRest: boolean) {
        this.stopRepTimer();
        this._timedRepRemaining = 0;
        if (this.exerciseSet.exercises.length > this.activeSetExerciseIndex + 1 &&
            this.hasIncompleteTimedRepInActiveRep) {
            this.activeRep.isCompleted = true;
            // need to go to the next exercise with current rep
            if (shouldRest) {
                this._timedToRestAfterCurrentRep = this.activeExercise.restBetweenReps;
                this.startTimedRest(() => this.activateNextExercise());
            } else {
                this.skipRest();
                this.activateNextExercise();
            }
        } else {
            this.exerciseSet.exercises.forEach((exercise) => exercise.reps[this.activeRepIndex].isCompleted = true);
            this.activeRep.isCompleted = true;
            // if there are more reps, need to go to the next rep on the first exercise
            if (this.activeExercise.reps.length > this.activeRepIndex + 1) {
                if (shouldRest) {
                    this._timedToRestAfterCurrentRep = this.activeExercise.restBetweenReps;
                    this.startTimedRest(() => this.activateNextRep());
                } else {
                    this.skipRest();
                    this.activateNextRep();
                }
            } else {
                this.stopRepTimer();
                if (shouldRest) {
                    this._timedToRestAfterCurrentRep = this.activeExercise.restAfterExercise;
                    this.startTimedRest(() => this.completeExercise());
                } else {
                    this.completeExercise();
                }
            }
        }
    }

    get isActiveRepCompleted(): boolean {
        return this.activeRep.isCompleted;
    }

    get activeRep(): Rep {
        return this.activeExercise.reps[this.activeRepIndex];
    }

    addRep(index: number) {
        if (!this.isMaxReps) {
            this.exerciseSet.exercises.forEach(set => {
                const newRep: Rep = new Rep({
                    weight: set.reps[index].weight,
                    weightUnit: set.reps[index].weightUnit,
                    times: set.reps[index].times,
                    seconds: set.reps[index].seconds
                });
                set.reps.splice(index, 0, newRep);
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
        return this.exerciseSet.exercises[0].reps.length === MAXREPS;
    }

    get isMinReps(): boolean {
        return this.exerciseSet.exercises[0].reps.length === MINREPS;
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
