import { Action } from '@ngrx/store';
import { DisplayMode, RunningState } from 'src/app/models/enums';
import { IWorkoutDayState } from '../state/workouts.state';

export enum EWorkoutsActions {
    SetSelectedDay = '[Workouts] Set selected day',
    SetCurrentWorkoutId = '[Workouts] Set current workout id',
    DeleteWorkoutById = '[Workout] Delete workout by id',
    WorkoutDeleted = '[Workout] Workout has been deleted',
    DeleteWorkoutDay = '[Workout] Delete workout day',
    StartFirstExercise = '[Workouts] Start first exercise',
    StartNextExercise = '[Workouts] Start next exercise',
    ExerciseStarted = '[Workouts] Exercise has started',
    ExerciseCompleted = '[Workouts] Exercise has completed',
    ChangeDisplayMode = '[Workouts] Change Display Mode',
}

export interface ISetSelectedDayPayload {
    workoutId: number;
    dayId: number;
}

export class SetSelectedDay implements Action {
    readonly type = EWorkoutsActions.SetSelectedDay;
    constructor(public payload: ISetSelectedDayPayload) { }
}

export class SetCurrentWorkoutId implements Action {
    readonly type = EWorkoutsActions.SetCurrentWorkoutId;
    constructor(public payload: { currentWorkoutId: number }) { }
}

export class DeleteWorkoutById implements Action {
    readonly type = EWorkoutsActions.DeleteWorkoutById;
    constructor(public payload: { workoutId?: number }) { }
}
export class WorkoutDeleted implements Action {
    readonly type = EWorkoutsActions.WorkoutDeleted;
    constructor() { }
}
export class DeleteWorkoutDay implements Action {
    readonly type = EWorkoutsActions.DeleteWorkoutDay;
    constructor(public payload: { workoutDayId: number }) { }
}

export class StartFirstExercise implements Action {
    readonly type = EWorkoutsActions.StartFirstExercise;
    constructor(public payload: IWorkoutDayState) {
        payload.runningExerciseSetIndex = 0;
        payload.displayMode = DisplayMode.Workout;
    }
}
export class StartNextExercise implements Action {
    readonly type = EWorkoutsActions.StartNextExercise;
    constructor(public payload: IWorkoutDayState) {
        payload.displayMode = DisplayMode.Workout;
    }
}
export class ExerciseStarted implements Action {
    readonly type = EWorkoutsActions.ExerciseStarted;
    constructor(public payload: IWorkoutDayState) {
        payload.runningState = RunningState.Started;
        payload.displayMode = DisplayMode.Workout;
    }
}
export class ExerciseCompleted implements Action {
    readonly type = EWorkoutsActions.ExerciseCompleted;
    constructor(public payload: IWorkoutDayState) {
        payload.runningState = RunningState.Completed;
        payload.displayMode = DisplayMode.Workout;
    }
}
export class ChangeDisplayMode implements Action {
    readonly type = EWorkoutsActions.ChangeDisplayMode;
    constructor(public payload: IWorkoutDayState) {
        payload.runningState = RunningState.NA;
        payload.runningExerciseSetIndex = null;
    }
}

export type WorkoutsActions =
    SetSelectedDay |
    SetCurrentWorkoutId |
    DeleteWorkoutById |
    WorkoutDeleted |
    DeleteWorkoutDay |
    StartFirstExercise |
    StartNextExercise |
    ExerciseStarted |
    ExerciseCompleted |
    ChangeDisplayMode
    ;
