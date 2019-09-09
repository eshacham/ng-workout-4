import { Action } from '@ngrx/store';
import { WorkoutBean, WorkoutBase } from 'src/app/models/Workout';
import { WorkoutDayBean } from 'src/app/models/WorkoutDay';

export enum EWorkoutsActions {
    SelectWorkout = '[Workouts] Select workout',
    UnselectWorkout = '[Workouts] Unselect workout',
    DeleteWorkout = '[Workouts] Delete workout',
    WorkoutDeleted = '[Workouts] Workout has been deleted',
    AddWorkout = '[Workouts] Add workout',
    UpdateWorkout = '[Workouts] Update workout',
}

export class SelectWorkout implements Action {
    readonly type = EWorkoutsActions.SelectWorkout;
    constructor(public payload: { workoutId: string }) { }
}
export class UnselectWorkout implements Action {
    readonly type = EWorkoutsActions.UnselectWorkout;
    constructor() { }
}

export class DeleteWorkout implements Action {
    readonly type = EWorkoutsActions.DeleteWorkout;
    constructor(public payload: { workoutId: string }) { }
}
export class UpdateWorkout implements Action {
    readonly type = EWorkoutsActions.UpdateWorkout;
    constructor(public payload: { workout: WorkoutBean }) { }
}

export class AddWorkout implements Action {
    readonly type = EWorkoutsActions.AddWorkout;
    constructor(public payload: { workout: WorkoutBean, day: WorkoutDayBean }) { }
}

export type WorkoutsActions =
    SelectWorkout |
    UnselectWorkout |
    DeleteWorkout |
    AddWorkout |
    UpdateWorkout
    ;
