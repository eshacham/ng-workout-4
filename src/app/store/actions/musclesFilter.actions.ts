import { Action } from '@ngrx/store';
import { Muscles } from '../../models/enums';

export enum EMusclesFilterActions {
    SetExerciseMuscleFilter = '[Muscle Filter] Set exercise\'s filter',
    AddExerciseMuscleFilter = '[Muscle Filter] Add muscle to exercise',
    DeleteExerciseMuscleFilter = '[Muscle Filter] Delete muscle from exercise',
    SetLibraryMuscleFilter = '[Muscle Filter] Set library\'s filter',
    AddLibraryMuscleFilter = '[Muscle Filter] Add muscle to library',
    DeleteLibraryMuscleFilter = '[Muscle Filter] Delete muscle from library',
}

export class SetExerciseMuscleFilter implements Action {
    readonly type = EMusclesFilterActions.SetExerciseMuscleFilter;
    constructor (public muscles: Muscles[]) {}
}
export class AddExerciseMuscleFilter implements Action {
    readonly type = EMusclesFilterActions.AddExerciseMuscleFilter;
    constructor (public payload: { muscle: Muscles, mediaId: string}) {}
}
export class DeleteExerciseMuscleFilter implements Action {
    readonly type = EMusclesFilterActions.DeleteExerciseMuscleFilter;
    constructor (public payload: { muscle: Muscles, mediaId: string}) {}
}
export class SetLibraryMuscleFilter implements Action {
    readonly type = EMusclesFilterActions.SetLibraryMuscleFilter;
    constructor (public muscles: Muscles[]) {}
}
export class AddLibraryMuscleFilter implements Action {
    readonly type = EMusclesFilterActions.AddLibraryMuscleFilter;
    constructor (public muscle: Muscles) {}
}
export class DeleteLibraryMuscleFilter implements Action {
    readonly type = EMusclesFilterActions.DeleteLibraryMuscleFilter;
    constructor (public muscle: Muscles) {}
}

export type MusclesFilterActions =
SetExerciseMuscleFilter |
AddExerciseMuscleFilter |
DeleteExerciseMuscleFilter |
SetLibraryMuscleFilter |
AddLibraryMuscleFilter |
DeleteLibraryMuscleFilter
;
