import { Action } from '@ngrx/store';
import { DisplayMode, RunningState } from 'src/app/models/enums';
import { WorkoutDayBean } from 'src/app/models/WorkoutDay';

export enum Direction {
    Forward = 1,
    Backword = 2
}

export enum EWorkoutDaysActions {
    SelectWorkoutDay = '[WorkoutDays] Select workout day',
    DeleteWorkoutDay = '[WorkoutDays] Delete workout day',
    WorkoutDayDeleted = '[WorkoutDays] Workout day has been deleted',
    AddWorkoutDay = '[WorkoutDays] Add workout day',
    // WorkoutDayAdded = '[WorkoutDays] Workout day has been added',
    MoveWorkoutDay = '[WorkoutDays] Move workout day',
    WorkoutDayMoved = '[WorkoutDays] Update Workout day has been moved',
    UpdateWorkoutDay = '[WorkoutDays] Update Workout day',
    StartFirstExercise = '[WorkoutDays] Start first exercise',
    StartNextExercise = '[WorkoutDays] Start next exercise',
    ExerciseStarted = '[WorkoutDays] Exercise has started',
    ExerciseCompleted = '[WorkoutDays] Exercise has completed',
    ChangeDisplayMode = '[WorkoutDays] Change workout day display mode',
    ReorderExerciseSets = '[WorkoutDays] Reorder exercise sets',
}

export class MoveWorkoutDay implements Action {
    readonly type = EWorkoutDaysActions.MoveWorkoutDay;
    constructor(public payload: { direction: Direction }) { }
}

export class WorkoutDayMoved implements Action {
    readonly type = EWorkoutDaysActions.WorkoutDayMoved;
    constructor() { }
}

export class SelectWorkoutDay implements Action {
    readonly type = EWorkoutDaysActions.SelectWorkoutDay;
    constructor(public payload: {
        workoutId: string;
        dayId: string
    }) { }
}

export class DeleteWorkoutDay implements Action {
    readonly type = EWorkoutDaysActions.DeleteWorkoutDay;
    constructor(public payload: {
        dayId: string,
        // sets: string[]
    }) { }
}

export class WorkoutDayDeleted implements Action {
    readonly type = EWorkoutDaysActions.WorkoutDayDeleted;
    constructor() { }
}
// export class AddWorkoutDay implements Action {
//     readonly type = EWorkoutDaysActions.AddWorkoutDay;
//     constructor(public payload: {
//         dayId: string
//     }) { }
// }
export class UpdateWorkoutDay implements Action {
    readonly type = EWorkoutDaysActions.UpdateWorkoutDay;
    constructor(public payload: {
        dayId: string,
        name: string
    }) { }
}

export class AddWorkoutDay implements Action {
    readonly type = EWorkoutDaysActions.AddWorkoutDay;
    constructor(public payload: {
        workoutId: string,
        day: WorkoutDayBean,
        index2AddFrom: number
    }) { }
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
export class ReorderExerciseSets implements Action {
    readonly type = EWorkoutDaysActions.ReorderExerciseSets;
    constructor(public payload: {
        dayId: string,
        fromIndex: number,
        toIndex: number,
    }) { }
}

export type WorkoutDaysActions =
    SelectWorkoutDay |
    DeleteWorkoutDay |
    AddWorkoutDay |
    WorkoutDayDeleted |
    StartFirstExercise |
    MoveWorkoutDay |
    WorkoutDayMoved |
    UpdateWorkoutDay |
    StartNextExercise |
    ExerciseStarted |
    ExerciseCompleted |
    ChangeDisplayMode |
    ReorderExerciseSets
    ;
