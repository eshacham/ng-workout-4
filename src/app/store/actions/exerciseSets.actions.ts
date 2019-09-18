import { Action } from '@ngrx/store';
import { ExerciseSetBean } from 'src/app/models/ExerciseSet';
import { ExerciseBean } from 'src/app/models/Exercise';

export enum EExerciseSetActions {
    AddExerciseSets = '[Exercise Set] Add exercise set(s)',
    DeleteExerciseSet = '[Exercise Set] Delete exercise set',
    SwitchExercises = '[Exercise Set] Switch exercises',
}

export class AddExerciseSets implements Action {
    readonly type = EExerciseSetActions.AddExerciseSets;
    constructor(public payload: {
        dayId: string,
        sets: ExerciseSetBean[],
        exes: ExerciseBean[]
        }) {}
}
export class DeleteExerciseSet implements Action {
    readonly type = EExerciseSetActions.DeleteExerciseSet;
    constructor(public payload: {
        dayId: string,
        setId: string,
        exeIds: string[]
    }) { }
}
export class SwitchExercises implements Action {
    readonly type = EExerciseSetActions.SwitchExercises;
    constructor(public payload: {
        setId: string,
        lowIndex: number
    }) { }
}

export type ExerciseSetActions =
    AddExerciseSets |
    DeleteExerciseSet |
    SwitchExercises
    ;
