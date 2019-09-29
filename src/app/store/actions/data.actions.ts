import { Action } from '@ngrx/store';
import { AllDataMaps } from 'src/app/models/interfaces';

export enum EDataActions {
    GetData = '[Data] Get app data',
    GetDataSuccess = '[Data] Get app data success',
    DataReset = '[Data] Data have been reset',
    UpdateWorkouts = '[Data] Update workouts',
    WorkoutsUpdated = '[Data] Workouts have been updated',
    UpdateImages = '[Data] Update images',
    ImagesUpdated = '[Data] Images have been updated',
}
export class GetData implements Action {
    public readonly type = EDataActions.GetData;
}

export class GetDataSuccess implements Action {
    public readonly type = EDataActions.GetDataSuccess;
    constructor(public payload: AllDataMaps) { }
}

export class DataReset implements Action {
    readonly type = EDataActions.DataReset;
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

export class UpdateImages implements Action {
    readonly type = EDataActions.UpdateImages;
    constructor() { }
}
export class ImagesUpdated implements Action {
    readonly type = EDataActions.ImagesUpdated;
    constructor() { }
}

export type DataActions =
    GetData |
    GetDataSuccess |
    DataReset |
    WorkoutsUpdated |
    UpdateImages |
    ImagesUpdated
    ;
