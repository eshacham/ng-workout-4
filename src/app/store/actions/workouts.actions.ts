import { Action } from '@ngrx/store';

export enum EWorkoutsActions {
    SelectWorkout = '[Workouts] Select workout',
    UnselectWorkout = '[Workouts] Unselect workout',
    DeleteWorkout = '[Workouts] Delete workout',
    WorkoutDeleted = '[Workouts] Workout has been deleted',
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

export type WorkoutsActions =
    SelectWorkout |
    UnselectWorkout |
    DeleteWorkout |
    WorkoutDeleted
    ;
