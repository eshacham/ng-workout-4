import { Action } from '@ngrx/store';
import { ExerciseSetBean } from 'src/app/models/ExerciseSet';
import { ExerciseBean } from 'src/app/models/Exercise';

export enum EExerciseSetActions {
    AddExerciseSets = '[Exercise Set] Add exercise set(s)',
    DeleteExerciseSet = '[Exercise Set] Delete exercise set',
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

export type ExerciseSetActions =
    AddExerciseSets |
    DeleteExerciseSet
    ;
