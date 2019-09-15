import { Action } from '@ngrx/store';
import { ExerciseSetBean } from 'src/app/models/ExerciseSet';
import { ExerciseBean } from 'src/app/models/Exercise';

export enum EExerciseSetActions {
    AddExerciseSets = '[Exercise Set] Add exercise set(s)',
}

export class AddExerciseSets implements Action {
    readonly type = EExerciseSetActions.AddExerciseSets;
    constructor(public payload: {
        dayId: string,
        sets: ExerciseSetBean[],
        exes: ExerciseBean[]
        }) {}
}

export type ExerciseSetActions =
    AddExerciseSets
    ;
