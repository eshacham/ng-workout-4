import { Action } from '@ngrx/store';

export enum EWorkoutsActions {
    SetLastSelectedWorkoutDay = '[Workouts] Set last selected day',
    SetCurrentWorkoutId = '[Workouts] Set current workout id',
}

export class SetLastSelectedWorkoutDay implements Action {
    readonly type = EWorkoutsActions.SetLastSelectedWorkoutDay;
    constructor (public payload: {workoutId: number, lastSelectedDay: number}) {}
}

export class SetCurrentWorkoutId implements Action {
    readonly type = EWorkoutsActions.SetCurrentWorkoutId;
    constructor (public payload: {currentWorkoutId: number}) {}
}

export type WorkoutsActions =
    SetLastSelectedWorkoutDay |
    SetCurrentWorkoutId
;
