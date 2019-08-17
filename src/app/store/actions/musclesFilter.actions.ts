import { Action } from '@ngrx/store';
import { Muscles } from '../../models/enums';

export enum ActionTypes {
    SetExerciseMuscleFilter = '[Muscle Filter] Set for exercise',
    AddExerciseMuscleFilter = '[Muscle Filter] Add to exercise',
    DeleteExerciseMuscleFilter = '[Muscle Filter] Delete from exercise',
    SetLibraryMuscleFilter = '[Muscle Filter] Set for library',
    AddLibraryMuscleFilter = '[Muscle Filter] Add to library',
    DeleteLibraryMuscleFilter = '[Muscle Filter] Delete from library',
}

export class SetExerciseMuscleFilter implements Action {
    readonly type = ActionTypes.SetExerciseMuscleFilter;
    constructor (public muscles: Muscles[]) {}
}
export class AddExerciseMuscleFilter implements Action {
    readonly type = ActionTypes.AddExerciseMuscleFilter;
    constructor (public muscle: Muscles) {}
}
export class DeleteExerciseMuscleFilter implements Action {
    readonly type = ActionTypes.DeleteExerciseMuscleFilter;
    constructor (public muscle: Muscles) {}
}
export class SetLibraryMuscleFilter implements Action {
    readonly type = ActionTypes.SetLibraryMuscleFilter;
    constructor (public muscles: Muscles[]) {}
}
export class AddLibraryMuscleFilter implements Action {
    readonly type = ActionTypes.AddLibraryMuscleFilter;
    constructor (public muscle: Muscles) {}
}
export class DeleteLibraryMuscleFilter implements Action {
    readonly type = ActionTypes.DeleteLibraryMuscleFilter;
    constructor (public muscle: Muscles) {}
}

export type ActionsUnion =
SetExerciseMuscleFilter |
AddExerciseMuscleFilter |
DeleteExerciseMuscleFilter |
SetLibraryMuscleFilter |
AddLibraryMuscleFilter |
DeleteLibraryMuscleFilter
;
