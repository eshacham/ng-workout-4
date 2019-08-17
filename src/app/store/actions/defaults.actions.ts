import { Action } from '@ngrx/store';

export enum ActionTypes {
    ResetDefaultWorkouts = '[Default Service] Reset default workouts',
    UpdatedDefaultWorkouts = '[Default Service] Updated default workouts',
    LoadedDefaultWorkouts = '[Default Service] Loaded default workouts',
    ResetDefaultImages = '[Default Service] Reset default images',
    UpdatedDefaultImages = '[Default Service] Updated default images',
    LoadedDefaultImages = '[Default Service] Loaded default images',
}

export class ResetDefaultWorkouts implements Action {
    readonly type = ActionTypes.ResetDefaultWorkouts;
    constructor () {}
}
export class LoadedDefaultWorkouts implements Action {
    readonly type = ActionTypes.LoadedDefaultWorkouts;
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
export class UpdatedDefaultImages implements Action {
    readonly type = ActionTypes.UpdatedDefaultImages;
    constructor () {}
}
export class LoadedDefaultImages implements Action {
    readonly type = ActionTypes.LoadedDefaultImages;
    constructor () {}
}

export type ActionsUnion =
ResetDefaultWorkouts |
LoadedDefaultWorkouts |
UpdatedDefaultWorkouts |
ResetDefaultImages |
UpdatedDefaultImages |
LoadedDefaultImages
;
