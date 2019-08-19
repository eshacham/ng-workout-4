import { Action } from '@ngrx/store';
import { DisplayMode } from 'src/app/models/enums';

export enum EWorkoutsActions {
    SetSelectedDay = '[Workouts] Set selected day',
    SetCurrentWorkoutId = '[Workouts] Set current workout id',
    DeleteWorkoutById = '[Workout] Delete workout by id',
    SetWorkoutDayState = '[Workout] Set workout day state',
}

export interface ISetSelectedDayPayload {
    workoutId: number;
    dayId: number;
}

export class SetSelectedDay implements Action {
    readonly type = EWorkoutsActions.SetSelectedDay;
    constructor (public payload: ISetSelectedDayPayload) {}
}

export class SetCurrentWorkoutId implements Action {
    readonly type = EWorkoutsActions.SetCurrentWorkoutId;
    constructor (public payload: {currentWorkoutId: number}) {}
}

export class DeleteWorkoutById implements Action {
    readonly type = EWorkoutsActions.DeleteWorkoutById;
    constructor (public payload: {workoutId?: number}) {}
}

export interface ISetWorkoutDayStatePayload {
    workoutDayId: number;
        runningExerciseSetIndex?: number;
        displayMode: DisplayMode;
}
export class SetWorkoutDayState implements Action {
    readonly type = EWorkoutsActions.SetWorkoutDayState;
    constructor (public payload: ISetWorkoutDayStatePayload) {}
}

export type WorkoutsActions =
    SetSelectedDay |
    SetCurrentWorkoutId |
    DeleteWorkoutById |
    SetWorkoutDayState
;
