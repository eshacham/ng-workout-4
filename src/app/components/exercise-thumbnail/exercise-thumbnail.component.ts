import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser/';
import { PopoverController } from '@ionic/angular';
import { ExerciseBean } from 'src/app/models/Exercise';
import { DisplayMode, WeightUnit, RunningState } from 'src/app/models/enums';
import { Rep } from 'src/app/models/Rep';
import { ExerciseThumbnailPopoverComponent } from '../exercise-thumbnail-popover/exercise-thumbnail-popover.component';
import { ExerciseMediaBean } from 'src/app/models/ExerciseMedia';
import { IAppState } from 'src/app/store/state/app.state';
import { getWorkoutDay } from 'src/app/store/selectors/workoutDays.selectors';
import { WorkoutDayBean } from 'src/app/models/WorkoutDay';
import { getExerciseSet } from 'src/app/store/selectors/exerciseSets.selectors';
import {
    ResetReps,
    SetRepsActiveState,
    SetInactiveReps,
    SetRepsCompleteState,
    SetRepsIncompleteState,
    DeleteExercise,
    UpdateExercise,
    AddRep,
    DeleteRep,
} from 'src/app/store/actions/exercises.actions';
import { DeleteExerciseSet, SwitchExercisesInSet } from 'src/app/store/actions/exerciseSets.actions';
import { UpdateExerciseMedia, UpdateExerciseMediaUsage } from 'src/app/store/actions/exercisesMedia.actions';
import { StartExercise, ExerciseCompleted } from 'src/app/store/actions/workoutDays.actions';
import { UpdateImages } from 'src/app/store/actions/data.actions';

const MAXREPS = 5;
const MINREPS = 1;

@Component({
    selector: 'app-exercise-thumbnail',
    templateUrl: './exercise-thumbnail.component.html',
    styleUrls: ['./exercise-thumbnail.component.scss'],
})
export class ExerciseThumbnailComponent implements OnInit, OnDestroy {
    activeRepIndex = 0;
    activeExerciseInSetIndex = 0;
    _timedRepRemaining = 0;
    timedRepTimer = null;
    _timedToRestAfterCurrentRep = 0;
    _timedRestRemaining = 0;
    timedRestTimer = null;
    displayMode = DisplayMode;
    weightUnit = WeightUnit;

    exercises: ExerciseBean[];
    images: ExerciseMediaBean[];
    private _isOpen = false;
    private _isRunning = false;
    private _isEditing = false;
    private _displayMode: DisplayMode = DisplayMode.Display;
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    @Input() dayId: string;
    @Input() exerciseSetId: string;
    @Input() exerciseSetIndex: number;

    get activeExercise(): ExerciseBean {
        return this.exercises[this.activeExerciseInSetIndex];
    }

    get isPrevRepAvailable(): boolean {
        const isPrevAvail =
            this.activeRepIndex > 0 ||
            this.activeExerciseInSetIndex > 0 ||
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

    get OpenedExercises(): ExerciseBean[] {
        return this.IsOpen ? this.exercises : [];
    }

    get IsRunning(): boolean { return this._isRunning; }
    set IsRunning(val: boolean) {
        this._isRunning = val;
    }

    get IsEditing(): boolean { return this._isEditing; }
    set IsEditing(val: boolean) {
        this._isEditing = val;
    }
    get isDayInEditMode(): boolean {
        return this.DisplayMode === DisplayMode.Edit;
    }
    get DisplayMode(): DisplayMode {
        return this._displayMode;
    }
    set DisplayMode(val: DisplayMode) {
        if (this._displayMode !== val) {
            this._displayMode = val;
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

    ngOnInit() {
        this.store.select(getExerciseSet(this.exerciseSetId))
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(exerciseSet => {
                console.log('exercise-thumbnail selectexerciseSet', exerciseSet);
                this.exercises = exerciseSet.exercises;
                this.images = exerciseSet.media;
            });
        this.store.select(getWorkoutDay(this.dayId))
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(day => {
                if (day) {
                    this.handleWorkoutDayStateChange(day);
                }
            });
    }

    ngOnDestroy() {
        console.log('onDestroy - exercise-thumbnail');
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    safeImage(media: ExerciseMediaBean): SafeUrl {
        if (media) {
            return this.domSanitizer.bypassSecurityTrustUrl(media.ionicPath);
        }
    }

    toggleOpen() {
        this.IsOpen = !this.IsOpen;
    }

    handleWorkoutDayStateChange(day: WorkoutDayBean) {
        this.DisplayMode = day.displayMode;
        let activeExerciseName: string;
        if (this.activeExercise) {
            activeExerciseName = this.activeExercise.name;
        }
        let state: string;
        if (day.runningState === RunningState.NA ||
            day.runningExerciseSetIndex !== this.exerciseSetIndex) {
            state = 'soping';
            this.IsRunning = false;
            this.stopRepTimer();
            this.stopRestTimer();
        } else if (day.runningState === RunningState.Running &&
            day.runningExerciseSetIndex === this.exerciseSetIndex) {
            state = 'starting';
            this.startWorkout();
        }
        console.log(`exercise-thumbnail - handleWorkoutDayStateChange: ${state} workout`, activeExerciseName);
    }

    toggleEditExercise() {
        this.IsEditing = !this.IsEditing;
    }

    runExercise() {
        this.startWorkout();
        this.store.dispatch(new StartExercise({
            id: this.dayId,
            runningExerciseSetIndex: this.exerciseSetIndex,
        }));
    }

    switchExercises(index: number) {
        this.store.dispatch(new SwitchExercisesInSet({
            setId: this.exerciseSetId,
            lowIndex: index
        }));
    }

    deleteExercise(exercise: ExerciseBean) {
        this.store.dispatch(new DeleteExercise({
            dayId: this.dayId,
            setId: this.exerciseSetId,
            exeId: exercise.id,
            mediaId: exercise.mediaId,
            deleteSet: this.exercises.length === 1
        }));
    }

    exerciseChanged(index: number, value: string | number, prop: string) {
        const newExe = ExerciseBean
            .copy(this.exercises[index]);
        newExe[prop] = value;
        this.store.dispatch(new UpdateExercise({
            exercise: newExe
        }));
    }

    completeExercise() {
        this.store.dispatch(new ExerciseCompleted({
            id: this.dayId,
            runningExerciseSetIndex: this.exerciseSetIndex,
            displayMode: DisplayMode.Display,
            runningState: RunningState.Completed,
            exerciseSets: null,
            name: null,
            workoutId: null
        }));
    }

    isTimedRepRemaining(repIndex: number): boolean {
        return this.activeRepIndex === repIndex &&
            this._timedRepRemaining > 0 && this.IsRunning;
    }

    get isResting(): boolean {
        return this._timedRestRemaining > 0 && this.IsRunning;
    }

    get hasSet(): boolean {
        return this.exercises.length > 1;
    }

    exerciseSetSelected() {
    }

    isFirstInSet(exercise: ExerciseBean): boolean {
        return this.hasSet && this.activeExercise === exercise;
    }

    isLastInSet(exercise: ExerciseBean): boolean {
        return this.hasSet && this.exercises[this.exercises.length - 1] === exercise;
    }

    isNotLastInSet(exercise: ExerciseBean): boolean {
        return this.hasSet && this.exercises[this.exercises.length - 1] !== exercise;
    }

    isFirstSet(exercise: ExerciseBean): boolean {
        return !this.hasSet || this.isFirstInSet(exercise);
    }

    isLastSet(exerciseSet: ExerciseBean): boolean {
        return !this.hasSet || this.isLastInSet(exerciseSet);
    }

    getTopBottomMarginClass(exercise: ExerciseBean) {
        if (this.isFirstInSet(exercise)) {
            return ['noBottomMargin'];
        } else {
            return ['noTopMargin'];
        }
    }

    get hasTimedRep(): boolean {
        return this.exercises.some((exe) => {
            return exe.reps.some((rep) => {
                return rep.seconds > 0;
            });
        });
    }
    get hasIncompleteTimedRepInActiveRep(): boolean {
        return this.exercises.some((exe) => {
            const rep = exe.reps[this.activeRepIndex];
            return rep.seconds > 0 && !rep.isComplete;
        });
    }
    get hasCompleteTimedRepInActiveRep(): boolean {
        return this.exercises.some((exe) => {
            const rep = exe.reps[this.activeRepIndex];
            return rep.seconds > 0 && rep.isComplete;
        });
    }
    isExecrciseSetActive(exerciseIndex: number): boolean {
        return exerciseIndex === this.activeExerciseInSetIndex;
    }

    getRepClass(rep: Rep, exercise: ExerciseBean) {
        const classes: string[] = ['nonActiveRep'];
        if (this.IsRunning) {
            if (rep.isActive) {
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
        this.IsRunning = true;
        this.activeExerciseInSetIndex = 0;
        this.resetReps();
        this.startTimedRep();
    }

    private resetReps() {
        this.exercises.forEach((exercise) => this.resetRepsState(exercise));
        this.activeRepIndex = 0;
        this.setExecrciseRepsActiveState(this.activeExercise, this.activeRepIndex);
    }

    private resetRepsState(exercise: ExerciseBean) {
        this.store.dispatch(new ResetReps({ exerciseId: exercise.id }));
    }

    private setExecrciseRepsActiveState(exercise: ExerciseBean, index: number) {
        this.store.dispatch(new SetRepsActiveState({
            exerciseId: exercise.id,
            activeIndex: index
        }));
    }

    private InactiveExerciseReps(exercise: ExerciseBean) {
        this.store.dispatch(new SetInactiveReps({ exerciseId: exercise.id }));
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
        if (this.activeExerciseInSetIndex > 0 &&
            (this.hasCompleteTimedRepInActiveRep || this.hasIncompleteTimedRepInActiveRep)) {
            this.setRepsIncompleteState(this.exercises[this.activeExerciseInSetIndex - 1].id, this.activeRepIndex);
            this.activatePrevExercise();
        } else {
            if (this.activeRepIndex > 0) {
                this.exercises.forEach(exercise => {
                    this.setRepsIncompleteState(exercise.id, this.activeRepIndex - 1);
                });
            }
            this.activatePrevRep();
        }
        this.stopRestTimer();
        this.stopRepTimer();
        this.startTimedRep();
    }

    private setRepsIncompleteState(exerciseId: string, incompleteIndex: number) {
        this.store.dispatch(new SetRepsIncompleteState({
            exerciseId: exerciseId,
            incompleteIndex: incompleteIndex
        }));
    }

    skipRest() {
        this._timedRestRemaining = 0;
    }
    private activateNextExercise() {
        this.InactiveExerciseReps(this.activeExercise);
        this.activeExerciseInSetIndex++;
        this.setExecrciseRepsActiveState(this.activeExercise, this.activeRepIndex);
        this.startTimedRep();
    }
    private activatePrevExercise() {
        this.InactiveExerciseReps(this.activeExercise);
        this.activeExerciseInSetIndex--;
        this.setExecrciseRepsActiveState(this.activeExercise, this.activeRepIndex);
        this.startTimedRep();
    }

    private activateNextRep() {
        this.InactiveExerciseReps(this.activeExercise);
        this.activeExerciseInSetIndex = 0;
        this.setExecrciseRepsActiveState(this.activeExercise, ++this.activeRepIndex);
        this.startTimedRep();
    }
    private activatePrevRep() {
        if (this.activeRepIndex > 0) {
            this.InactiveExerciseReps(this.activeExercise);
            this.activeExerciseInSetIndex = this.exercises.length - 1;
            this.setExecrciseRepsActiveState(this.activeExercise, --this.activeRepIndex);
        }
        this.startTimedRep();
    }

    nextRep(shouldRest: boolean) {
        this.stopRepTimer();
        this._timedRepRemaining = 0;
        if (this.exercises.length > this.activeExerciseInSetIndex + 1 &&
            this.hasIncompleteTimedRepInActiveRep) {
            this.setRepsCompleteState(this.activeExercise.id, this.activeRepIndex);
            // need to go to the next exercise with current rep
            if (shouldRest) {
                this._timedToRestAfterCurrentRep = this.activeExercise.restBetweenReps;
                this.startTimedRest(() => this.activateNextExercise());
            } else {
                this.skipRest();
                this.activateNextExercise();
            }
        } else {
            this.exercises.forEach((exercise) => {
                this.setRepsCompleteState(exercise.id, this.activeRepIndex);
            });
            this.setRepsCompleteState(this.activeExercise.id, this.activeRepIndex);
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

    private setRepsCompleteState(exerciseId: string, completeIndex: number) {
        this.store.dispatch(new SetRepsCompleteState({
            exerciseId: exerciseId,
            completeIndex: completeIndex
        }));
    }

    get isActiveRepCompleted(): boolean {
        return this.activeRep.isComplete;
    }

    get activeRep(): Rep {
        return this.activeExercise ? this.activeExercise.reps[this.activeRepIndex] : null;
    }

    addRep(index: number) {
        if (!this.isMaxReps) {
            this.exercises.forEach(exe => {
                this.store.dispatch(new AddRep({
                    exerciseId: exe.id,
                    copyFromIndex: index
                }));
            });
        }
    }

    deleteRep(index: number) {
        if (!this.isMinReps) {
            this.exercises.forEach(exe => {
                this.store.dispatch(new DeleteRep({
                    exerciseId: exe.id,
                    indexToDelete: index
                }));
            });
        }
    }

    get isMaxReps(): boolean {
        return this.exercises[0].reps.length === MAXREPS;
    }

    get isMinReps(): boolean {
        return this.exercises[0].reps.length === MINREPS;
    }

    async presentPopover(event: Event, rep: Rep, repIndex: number, exeId: string) {
        const popover = await this.popoverCtrl.create({
            component: ExerciseThumbnailPopoverComponent,
            event: event,
            componentProps: { rep: rep, exeId: exeId, repIndex: repIndex }
        });
        popover.present();
    }

}
