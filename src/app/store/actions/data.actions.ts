import { Action } from '@ngrx/store';
import { AllDataMaps } from 'src/app/models/interfaces';

export enum DataActionsTypes {
    GetData = '[Data] Get app data',
    GetDataSuccess = '[Data] Get app data success',
    DataReset = '[Data] Data have been reset',
    UpdateWorkouts = '[Data] Update workouts',
    WorkoutsUpdated = '[Data] Workouts have been updated',
    UpdateImages = '[Data] Update images',
    ImagesUpdated = '[Data] Images have been updated',
}
export class GetData implements Action {
    public readonly type = DataActionsTypes.GetData;
}

export class GetDataSuccess implements Action {
    public readonly type = DataActionsTypes.GetDataSuccess;
    constructor(public payload: AllDataMaps) { }
}

export class DataReset implements Action {
    readonly type = DataActionsTypes.DataReset;
    constructor() { }
}

export class UpdateWorkouts implements Action {
    readonly type = DataActionsTypes.UpdateWorkouts;
    constructor() { }
}

export class WorkoutsUpdated implements Action {
    readonly type = DataActionsTypes.WorkoutsUpdated;
    constructor() { }
}

export class UpdateImages implements Action {
    readonly type = DataActionsTypes.UpdateImages;
    constructor() { }
}
export class ImagesUpdated implements Action {
    readonly type = DataActionsTypes.ImagesUpdated;
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
