import { Action } from '@ngrx/store';
import { ExerciseMediaBean } from 'src/app/models/ExerciseMedia';

export enum ExerciseMediaActionsTypes {
    AddExerciseMedia = '[ExerciseMedia] Add exercise media',
    UpdateExerciseMedia = '[ExerciseMedia] Update exercise media',
    UpdateExerciseMediaUsage = '[ExerciseMedia] Update exercise medias usage',
    DeleteExerciseMedia = '[ExerciseMedia] Delete exercise media',
}

export class AddExerciseMedia implements Action {
    readonly type = ExerciseMediaActionsTypes.AddExerciseMedia;
    constructor (public payload: {
        exerciseMedia: ExerciseMediaBean,
    }) { }
}
export class UpdateExerciseMedia implements Action {
    readonly type = ExerciseMediaActionsTypes.UpdateExerciseMedia;
    constructor(public payload: {
        id: string,
        name?: string,
        mediaUsageCounterInc?: number
    }) { }
}
export class UpdateExerciseMediaUsage implements Action {
    readonly type = ExerciseMediaActionsTypes.UpdateExerciseMediaUsage;
    constructor(public payload: {
        ids: string[],
        mediaUsageCounterInc?: number
    }) { }
}
export class DeleteExerciseMedia implements Action {
    readonly type = ExerciseMediaActionsTypes.DeleteExerciseMedia;
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
