import { Action } from '@ngrx/store';
import { ExerciseMedia } from 'src/app/models/ExerciseMedia';

export enum EExerciseMediaActions {
    AddExerciseMedia = '[ExerciseMedia] Add exercise media',
    UpdateExerciseMedia = '[ExerciseMedia] Update exercise media',
    UpdateExerciseMediaUsage = '[ExerciseMedia] Update exercise medias usage',
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
        id: string,
        name?: string,
        mediaUsageCounterInc?: number
    }) { }
}
export class UpdateExerciseMediaUsage implements Action {
    readonly type = EExerciseMediaActions.UpdateExerciseMediaUsage;
    constructor(public payload: {
        ids: string[],
        mediaUsageCounterInc?: number
    }) { }
}
export class DeleteExerciseMedia implements Action {
    readonly type = EExerciseMediaActions.DeleteExerciseMedia;
    constructor (public payload: {
        id: string,
    }) { }
}

export type ExerciseMediaActions =
    AddExerciseMedia |
    UpdateExerciseMedia |
    UpdateExerciseMediaUsage |
    DeleteExerciseMedia
    ;
