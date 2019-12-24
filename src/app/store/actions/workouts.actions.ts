import { Action } from '@ngrx/store';
import { WorkoutBean } from 'src/app/models/Workout';
import { WorkoutDayBean } from 'src/app/models/WorkoutDay';

export enum WorkoutsActionsTypes {
    SelectWorkout = '[Workouts] Select workout',
    UnselectWorkout = '[Workouts] Unselect workout',
    DeleteWorkout = '[Workouts] Delete workout',
    DeleteWorkoutInProgress = '[Workouts] Delete workout in progress',
    WorkoutDeleted = '[Workouts] Workout has been deleted',
    AddWorkout = '[Workouts] Add workout',
    AddWorkoutSuccess = '[Workouts] Workout has been added',
    UpdateWorkout = '[Workouts] Update workout',
    ExportWorkout = '[Workouts] Export workout',
    ExportWorkoutSuccess = '[Workouts] Workout has been exported',
}

export class SelectWorkout implements Action {
    readonly type = WorkoutsActionsTypes.SelectWorkout;
    constructor(public payload: { workoutId: string }) { }
}
export class UnselectWorkout implements Action {
    readonly type = WorkoutsActionsTypes.UnselectWorkout;
    constructor() { }
}

export class DeleteWorkout implements Action {
    readonly type = WorkoutsActionsTypes.DeleteWorkout;
    constructor(public payload: {
        id: string,
        days: string[] }) { }
}
export class DeleteWorkoutInProgress implements Action {
    readonly type = WorkoutsActionsTypes.DeleteWorkoutInProgress;
    constructor(public payload: {
        id: string,
        days: string[] }) { }
}
export class UpdateWorkout implements Action {
    readonly type = WorkoutsActionsTypes.UpdateWorkout;
    constructor(public payload: { workout: WorkoutBean }) { }
}

export class ExportWorkout implements Action {
    readonly type = WorkoutsActionsTypes.ExportWorkout;
    constructor(public payload: { workoutId: string }) { }
}
export class ExportWorkoutSuccess implements Action {
    readonly type = WorkoutsActionsTypes.ExportWorkoutSuccess;
    constructor(public payload: { exportId: string }) { }
}

export class AddWorkout implements Action {
    readonly type = WorkoutsActionsTypes.AddWorkout;
    constructor(public payload: { workout: WorkoutBean, day: WorkoutDayBean }) { }
}
export class AddWorkoutSuccess implements Action {
    readonly type = WorkoutsActionsTypes.AddWorkoutSuccess;
    constructor(public payload: { workout: WorkoutBean, day: WorkoutDayBean }) { }
}

export type WorkoutsActions =
    SelectWorkout |
    UnselectWorkout |
    DeleteWorkout |
    DeleteWorkoutInProgress |
    AddWorkout |
    AddWorkoutSuccess |
    UpdateWorkout |
    ExportWorkout
    ;
