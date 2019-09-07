import { Action} from '@ngrx/store';
import { WorkoutsDataMaps } from 'src/app/models/DefaultWorkouts';

export enum EDataActions {
    GetData = '[Data] Get app data',
    GetDataSuccess = '[Data] Get app data success',
}

export class GetData implements Action {
    public readonly type = EDataActions.GetData;
}

export class GetDataSuccess implements Action {
    public readonly type = EDataActions.GetDataSuccess;
    constructor (public payload: WorkoutsDataMaps) {}
}

export type DataActions =
GetData |
GetDataSuccess
;
