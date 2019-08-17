import { Action } from '@ngrx/store';

export enum ActionTypes {
    SetLastSelectedWorkoutDay = '[Workouts] Set last selected day',
    SetCurrentWorkoutId = '[Workouts] Set Current sworkout id',
}

export class SetLastSelectedWorkoutDay implements Action {
    readonly type = ActionTypes.SetLastSelectedWorkoutDay;
    constructor (public payload: {workoutId: number, lastSelectedDay: number}) {}
}

export class SetCurrentWorkoutId implements Action {
    readonly type = ActionTypes.SetCurrentWorkoutId;
    constructor (public payload: {currentWorkoutId: number}) {}
}

export type ActionsUnion =
    SetLastSelectedWorkoutDay |
    SetCurrentWorkoutId
;
