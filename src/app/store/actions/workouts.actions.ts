import { Action } from '@ngrx/store';
import { DisplayMode, RunningState } from 'src/app/models/enums';
import { IWorkoutDayState } from '../state/workouts.state';

export enum EWorkoutsActions {
    SelectWorkout = '[Workouts] Select workout day',
    UnselectWorkout = '[Workouts] Unselect workout',
    DeleteWorkout = '[Workout] Delete workout',
    WorkoutDeleted = '[Workout] Workout has been deleted',
    SelectedWorkoutDay = '[Workouts] Set selected day',
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

export class SelectedWorkoutDay implements Action {
    readonly type = EWorkoutsActions.SelectedWorkoutDay;
    constructor(public payload: ISetSelectedDayPayload) { }
}

export class SelectWorkout implements Action {
    readonly type = EWorkoutsActions.SelectWorkout;
    constructor(public payload: { currentWorkoutId: number }) { }
}
export class UnselectWorkout implements Action {
    readonly type = EWorkoutsActions.UnselectWorkout;
    constructor() { }
}

export class DeleteWorkout implements Action {
    readonly type = EWorkoutsActions.DeleteWorkout;
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
    SelectWorkout |
    UnselectWorkout |
    DeleteWorkout |
    WorkoutDeleted |
    SelectedWorkoutDay |
    DeleteWorkoutDay |
    StartFirstExercise |
    StartNextExercise |
    ExerciseStarted |
    ExerciseCompleted |
    ChangeDisplayMode
    ;
