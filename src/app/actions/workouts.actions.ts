import { Action } from '@ngrx/store';

export enum ActionTypes {
    SetLastSelectedWorkoutDay = '[Workouts] Set last selected day',
}

export class SetLastSelectedWorkoutDay implements Action {
    readonly type = ActionTypes.SetLastSelectedWorkoutDay;
    constructor (public payload: {workoutId: number, lastSelectedDay: number}) {}
}

export type ActionsUnion =
SetLastSelectedWorkoutDay
;
