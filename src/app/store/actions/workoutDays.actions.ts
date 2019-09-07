import { Action } from '@ngrx/store';
import { DisplayMode, RunningState } from 'src/app/models/enums';
import { WorkoutDayBean } from 'src/app/models/WorkoutDay';

export enum Direction {
    Forward = 1,
    Backword = 2
}

export enum EWorkoutDaysActions {
    SelectWorkoutDay = '[Workouts] Select workout day',
    DeleteWorkoutDay = '[Workouts] Delete workout day',
    WorkoutDayDeleted = '[Workouts] Workout day has been deleted',
    AddWorkoutDay = '[Workouts] Add workout day',
    WorkoutDayAdded = '[Workouts] Workout day has been added',
    MoveWorkoutDay = '[Workouts] Move workout day',
    WorkoutDayMoved = '[Workouts] Workout day has been moved',
    StartFirstExercise = '[Workouts] Start first exercise',
    StartNextExercise = '[Workouts] Start next exercise',
    ExerciseStarted = '[Workouts] Exercise has started',
    ExerciseCompleted = '[Workouts] Exercise has completed',
    ChangeDisplayMode = '[Workouts] Change workout day display mode',
    DeleteExerciseSet = '[Workouts] Delete exercise set',
    ExerciseSetDeleted = '[Workouts] Eexercise set has been deleted'
}

export class MoveWorkoutDay implements Action {
    readonly type = EWorkoutDaysActions.MoveWorkoutDay;
    constructor(public payload: { direction: Direction }) {}
}

export class WorkoutDayMoved implements Action {
    readonly type = EWorkoutDaysActions.WorkoutDayMoved;
    constructor() { }
}

export class SelectWorkoutDay implements Action {
    readonly type = EWorkoutDaysActions.SelectWorkoutDay;
    constructor(public payload: {
        workoutId: string;
        dayId: string }) { }
}

export class DeleteWorkoutDay implements Action {
    readonly type = EWorkoutDaysActions.DeleteWorkoutDay;
    constructor(public payload: { workoutDayId: string }) { }
}

export class WorkoutDayDeleted implements Action {
    readonly type = EWorkoutDaysActions.WorkoutDayDeleted;
    constructor() { }
}
export class AddWorkoutDay implements Action {
    readonly type = EWorkoutDaysActions.AddWorkoutDay;
    constructor(public payload: { workoutDayId: string }) { }
}

export class WorkoutDayAdded implements Action {
    readonly type = EWorkoutDaysActions.WorkoutDayAdded;
    constructor(public payload: { workoutDayId: string }) { }
}

export class DeleteExerciseSet implements Action {
    readonly type = EWorkoutDaysActions.DeleteExerciseSet;
    constructor(public payload: {
        workoutDayId: string,
        exerciseSetIndex: number }) { }
}
export class ExerciseSetDeleted implements Action {
    readonly type = EWorkoutDaysActions.ExerciseSetDeleted;
    constructor(public payload: { workoutDayId: string }) { }
}

export class StartFirstExercise implements Action {
    readonly type = EWorkoutDaysActions.StartFirstExercise;
    constructor(public payload: WorkoutDayBean) {
        payload.runningExerciseSetIndex = 0;
        payload.displayMode = DisplayMode.Workout;
    }
}
export class StartNextExercise implements Action {
    readonly type = EWorkoutDaysActions.StartNextExercise;
    constructor(public payload: WorkoutDayBean) {
        payload.displayMode = DisplayMode.Workout;
    }
}
export class ExerciseStarted implements Action {
    readonly type = EWorkoutDaysActions.ExerciseStarted;
    constructor(public payload: WorkoutDayBean) {
        payload.runningState = RunningState.Started;
        payload.displayMode = DisplayMode.Workout;
    }
}
export class ExerciseCompleted implements Action {
    readonly type = EWorkoutDaysActions.ExerciseCompleted;
    constructor(public payload: WorkoutDayBean) {
        payload.runningState = RunningState.Completed;
        payload.displayMode = DisplayMode.Workout;
    }
}
export class ChangeDisplayMode implements Action {
    readonly type = EWorkoutDaysActions.ChangeDisplayMode;
    constructor(public payload: WorkoutDayBean) {
        payload.runningState = RunningState.NA;
        payload.runningExerciseSetIndex = null;
    }
}

export type WorkoutDaysActions =
    SelectWorkoutDay |
    DeleteWorkoutDay |
    WorkoutDayAdded |
    AddWorkoutDay |
    WorkoutDayDeleted |
    StartFirstExercise |
    MoveWorkoutDay |
    WorkoutDayMoved |
    StartNextExercise |
    ExerciseStarted |
    ExerciseCompleted |
    ChangeDisplayMode |
    DeleteExerciseSet |
    ExerciseSetDeleted
    ;
