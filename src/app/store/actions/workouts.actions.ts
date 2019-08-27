import { Action } from '@ngrx/store';
import { DisplayMode, RunningState } from 'src/app/models/enums';
import { IWorkoutDayState } from '../state/workouts.state';

export enum Direction {
    Forward = 1,
    Backword = 2
}

export enum EWorkoutsActions {
    SelectWorkout = '[Workouts] Select workout',
    UnselectWorkout = '[Workouts] Unselect workout',
    DeleteWorkout = '[Workouts] Delete workout',
    WorkoutDeleted = '[Workouts] Workout has been deleted',
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

export class SelectWorkout implements Action {
    readonly type = EWorkoutsActions.SelectWorkout;
    constructor(public payload: { workoutId: number }) { }
}
export class UnselectWorkout implements Action {
    readonly type = EWorkoutsActions.UnselectWorkout;
    constructor() { }
}

export class DeleteWorkout implements Action {
    readonly type = EWorkoutsActions.DeleteWorkout;
    constructor(public payload: { workoutId: number }) { }
}

export class WorkoutDeleted implements Action {
    readonly type = EWorkoutsActions.WorkoutDeleted;
    constructor() { }
}
export class MoveWorkoutDay implements Action {
    readonly type = EWorkoutsActions.MoveWorkoutDay;
    constructor(public payload: { direction: Direction }) {}
}

export class WorkoutDayMoved implements Action {
    readonly type = EWorkoutsActions.WorkoutDayMoved;
    constructor() { }
}

export class SelectWorkoutDay implements Action {
    readonly type = EWorkoutsActions.SelectWorkoutDay;
    constructor(public payload: {
        workoutId: number;
        dayId: number }) { }
}

export class DeleteWorkoutDay implements Action {
    readonly type = EWorkoutsActions.DeleteWorkoutDay;
    constructor(public payload: { workoutDayId: number }) { }
}

export class WorkoutDayDeleted implements Action {
    readonly type = EWorkoutsActions.WorkoutDayDeleted;
    constructor(public payload: { workoutDayId: number }) { }
}
export class AddWorkoutDay implements Action {
    readonly type = EWorkoutsActions.AddWorkoutDay;
    constructor(public payload: { workoutDayId: number }) { }
}

export class WorkoutDayAdded implements Action {
    readonly type = EWorkoutsActions.WorkoutDayAdded;
    constructor() { }
}

export class DeleteExerciseSet implements Action {
    readonly type = EWorkoutsActions.DeleteExerciseSet;
    constructor(public payload: {
        workoutDayId: number,
        exerciseSetIndex: number }) { }
}
export class ExerciseSetDeleted implements Action {
    readonly type = EWorkoutsActions.ExerciseSetDeleted;
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
