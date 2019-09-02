import { Action} from '@ngrx/store';
import { Workout } from '../../models/Workout';

export enum EDataActions {
    GetWorkouts = '[Data] Get workouts data',
    GetWorkoutsSuccess = '[Data] Get workouts success',
}

export class GetWorkouts implements Action {
    public readonly type = EDataActions.GetWorkouts;
}

export class GetWorkoutsSuccess implements Action {
    public readonly type = EDataActions.GetWorkoutsSuccess;
    constructor (public payload: Workout[]) {}
}

export type DataActions =
GetWorkouts |
GetWorkoutsSuccess
;
