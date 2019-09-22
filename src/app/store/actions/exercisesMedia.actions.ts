import { Action } from '@ngrx/store';
import { ExerciseMedia } from 'src/app/models/ExerciseMedia';

export enum EExerciseMediaActions {
    AddExerciseMedia = '[ExerciseMedia] Add exercise media',
    UpdateExerciseMedia = '[ExerciseMedia] Update exercise media',
    DeleteExerciseMedia = '[ExerciseMedia] Delete exercise media',
}

export class AddExerciseMedia implements Action {
    readonly type = EExerciseMediaActions.AddExerciseMedia;
    constructor (public payload: {
        exerciseMedia: ExerciseMedia,
    }) { }
}
export class UpdateExerciseMedia implements Action {
    readonly type = EExerciseMediaActions.UpdateExerciseMedia;
    constructor(public payload: {
        mediaId: string,
        name: string
    }) { }
}
export class DeleteExerciseMedia implements Action {
    readonly type = EExerciseMediaActions.DeleteExerciseMedia;
    constructor (public payload: {
        mediaId: string,
    }) { }
}


export type ExerciseMediaActions =
    AddExerciseMedia |
    UpdateExerciseMedia |
    DeleteExerciseMedia
    ;
