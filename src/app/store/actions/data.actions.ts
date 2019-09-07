import { Action} from '@ngrx/store';
import { WorkoutsDataMaps } from 'src/app/models/DefaultWorkouts';

export enum EDataActions {
    GetWorkouts = '[Data] Get workouts data',
    GetWorkoutsSuccess = '[Data] Get workouts success',
}

export class GetWorkouts implements Action {
    public readonly type = EDataActions.GetWorkouts;
}

export class GetWorkoutsSuccess implements Action {
    public readonly type = EDataActions.GetWorkoutsSuccess;
    constructor (public payload: WorkoutsDataMaps) {}
}

export type DataActions =
GetWorkouts |
GetWorkoutsSuccess
;
