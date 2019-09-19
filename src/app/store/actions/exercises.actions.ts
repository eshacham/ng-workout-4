import { Action } from '@ngrx/store';

export enum EExerciseActions {
    ResetReps = '[Exercise] Reset all reps',
    SetRepsActiveState = '[Exercise] Set reps active state',
    SetRepsCompleteState = '[Exercise] Set rep complete state',
    SetRepsIncompleteState = '[Exercise] Set rep incomplete state',
    SetInactiveReps = '[Exercise] Set reps to inactive state',
    DeleteExercise = '[Exercise] Delete exercise',
    UpdateExercise = '[Exercise] update exercise set',
    AddRep = '[Exercise] Add rep',
    DeleteRep = '[Exercise] Delete rep',
}

export class ResetReps implements Action {
    readonly type = EExerciseActions.ResetReps;
    constructor(public payload: { exerciseId: string }) {}
}
export class SetInactiveReps implements Action {
    readonly type = EExerciseActions.SetInactiveReps;
    constructor(public payload: { exerciseId: string }) {}
}
export class SetRepsActiveState implements Action {
    readonly type = EExerciseActions.SetRepsActiveState;
    constructor(public payload: {
        exerciseId: string,
        activeIndex: number
    }) {}
}
export class SetRepsCompleteState implements Action {
    readonly type = EExerciseActions.SetRepsCompleteState;
    constructor(public payload: {
        exerciseId: string,
        completeIndex: number
    }) {}
}
export class SetRepsIncompleteState implements Action {
    readonly type = EExerciseActions.SetRepsIncompleteState;
    constructor(public payload: {
        exerciseId: string,
        incompleteIndex: number
    }) {}
}
export class DeleteExercise implements Action {
    readonly type = EExerciseActions.DeleteExercise;
    constructor (public payload: {
        setId: string, exeId: string }) { }
}
export class UpdateExercise implements Action {
    readonly type = EExerciseActions.UpdateExercise;
    constructor(public payload: {
        exeId: string,
        name: string
    }) { }
}
export class AddRep implements Action {
    readonly type = EExerciseActions.AddRep;
    constructor (public payload: {
        copyFromIndex: number,
        exerciseId: string,
    }) { }
}
export class DeleteRep implements Action {
    readonly type = EExerciseActions.DeleteRep;
    constructor (public payload: {
        indexToDelete: number,
        exerciseId: string,
    }) { }
}

export type ExerciseActions =
    ResetReps |
    SetRepsActiveState |
    SetRepsCompleteState |
    SetRepsIncompleteState |
    SetInactiveReps |
    AddRep |
    DeleteRep |
    DeleteExercise |
    UpdateExercise
    ;
