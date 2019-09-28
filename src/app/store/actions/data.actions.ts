import { Action } from '@ngrx/store';
import { AllDataMaps } from 'src/app/models/interfaces';

export enum EDataActions {
    GetData = '[Data] Get app data',
    GetDataSuccess = '[Data] Get app data success',
    WorkoutsReset = '[Data] Workouts have ben reset',
    UpdateWorkouts = '[Data] Update workouts',
    WorkoutsUpdated = '[Data] Workouts have been updated',
    ImagesReset = '[Data] Images have been reset',
    UpdateImages = '[Data] Update images',
    ImagesUpdated = '[Data] Images have been updated',
    LoadedImages = '[Data] Images have been loaded',
}
export class GetData implements Action {
    public readonly type = EDataActions.GetData;
}

export class GetDataSuccess implements Action {
    public readonly type = EDataActions.GetDataSuccess;
    constructor(public payload: AllDataMaps) { }
}

export class ResetWorkouts implements Action {
    readonly type = EDataActions.WorkoutsReset;
    constructor() { }
}

export class UpdateWorkouts implements Action {
    readonly type = EDataActions.UpdateWorkouts;
    constructor() { }
}

export class WorkoutsUpdated implements Action {
    readonly type = EDataActions.WorkoutsUpdated;
    constructor() { }
}
export class ResetImages implements Action {
    readonly type = EDataActions.ImagesReset;
    constructor() { }
}
export class UpdateImages implements Action {
    readonly type = EDataActions.UpdateImages;
    constructor() { }
}
export class ImagesUpdated implements Action {
    readonly type = EDataActions.ImagesUpdated;
    constructor() { }
}
export class LoadedImages implements Action {
    readonly type = EDataActions.LoadedImages;
    constructor() { }
}

export type DataActions =
    GetData |
    GetDataSuccess |
    ResetWorkouts |
    WorkoutsUpdated |
    ResetImages |
    UpdateImages |
    ImagesUpdated |
    LoadedImages
    ;
