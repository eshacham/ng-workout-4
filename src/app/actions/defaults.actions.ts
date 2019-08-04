import { Action } from '@ngrx/store';

export enum ActionTypes {
    ResetDefaultWorkouts = '[Default Service] Reset default workouts',
    UpdatedDefaultWorkouts = '[Default Service] Updated default workouts',
    ResetDefaultImages = '[Default Service] Reset default images'
}

export class ResetDefaultWorkouts implements Action {
    readonly type = ActionTypes.ResetDefaultWorkouts;
    constructor () {}
}
export class UpdatedDefaultWorkouts implements Action {
    readonly type = ActionTypes.UpdatedDefaultWorkouts;
    constructor () {}
}
export class ResetDefaultImages implements Action {
    readonly type = ActionTypes.ResetDefaultImages;
    constructor () {}
}

export type ActionsUnion =
ResetDefaultWorkouts |
UpdatedDefaultWorkouts |
ResetDefaultImages ;
