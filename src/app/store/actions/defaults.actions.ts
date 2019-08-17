import { Action } from '@ngrx/store';

export enum EDefaultsAction {
    ResetDefaultWorkouts = '[Defaults] Reset workouts',
    UpdatedDefaultWorkouts = '[Defaults] Updated workouts',
    LoadedDefaultWorkouts = '[Defaults] Loaded workouts',
    ResetDefaultImages = '[Defaults] Reset images',
    UpdatedDefaultImages = '[Defaults] Updated images',
    LoadedDefaultImages = '[Defaults] Loaded images',
}

export class ResetDefaultWorkouts implements Action {
    readonly type = EDefaultsAction.ResetDefaultWorkouts;
    constructor () {}
}
export class LoadedDefaultWorkouts implements Action {
    readonly type = EDefaultsAction.LoadedDefaultWorkouts;
    constructor () {}
}
export class UpdatedDefaultWorkouts implements Action {
    readonly type = EDefaultsAction.UpdatedDefaultWorkouts;
    constructor () {}
}
export class ResetDefaultImages implements Action {
    readonly type = EDefaultsAction.ResetDefaultImages;
    constructor () {}
}
export class UpdatedDefaultImages implements Action {
    readonly type = EDefaultsAction.UpdatedDefaultImages;
    constructor () {}
}
export class LoadedDefaultImages implements Action {
    readonly type = EDefaultsAction.LoadedDefaultImages;
    constructor () {}
}

export type DefaultsActions =
ResetDefaultWorkouts |
LoadedDefaultWorkouts |
UpdatedDefaultWorkouts |
ResetDefaultImages |
UpdatedDefaultImages |
LoadedDefaultImages
;
