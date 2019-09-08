import { Action } from '@ngrx/store';
import { WorkoutsDataMaps } from 'src/app/models/DefaultWorkouts';

export enum EDataActions {
    GetData = '[Data] Get app data',
    GetDataSuccess = '[Data] Get app data success',
    ResetWorkouts = '[Data] Reset workouts',
    UpdateWorkouts = '[Data] Update workouts',
    WorkoutsUpdated = '[Data] Workouts have been updated',
    // LoadedWorkouts = '[Data] Loaded workouts',
    ResetImages = '[Data] Reset images',
    ImagesUpdated = '[Data] Images have been updated',
    LoadedImages = '[Data] Loaded images',
}
export class GetData implements Action {
    public readonly type = EDataActions.GetData;
}

export class GetDataSuccess implements Action {
    public readonly type = EDataActions.GetDataSuccess;
    constructor (public payload: WorkoutsDataMaps) {}
}

export class ResetWorkouts implements Action {
    readonly type = EDataActions.ResetWorkouts;
    constructor () {}
}
// export class LoadedWorkouts implements Action {
//     readonly type = EDataActions.LoadedWorkouts;
//     constructor () {}
// }
export class UpdateWorkouts implements Action {
    readonly type = EDataActions.UpdateWorkouts;
    constructor () {}
}
export class WorkoutsUpdated implements Action {
    readonly type = EDataActions.WorkoutsUpdated;
    constructor () {}
}
export class ResetImages implements Action {
    readonly type = EDataActions.ResetImages;
    constructor () {}
}
export class ImagesUpdated implements Action {
    readonly type = EDataActions.ImagesUpdated;
    constructor () {}
}
export class LoadedImages implements Action {
    readonly type = EDataActions.LoadedImages;
    constructor () {}
}

export type DataActions =
GetData |
GetDataSuccess |
ResetWorkouts |
// LoadedWorkouts |
WorkoutsUpdated |
ResetImages |
ImagesUpdated |
LoadedImages
;
