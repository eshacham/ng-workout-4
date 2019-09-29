import { Action } from '@ngrx/store';
import { Rep } from 'src/app/models/Rep';
import { ExerciseBean } from 'src/app/models/Exercise';

export enum EExerciseActions {
    UpdateExercise = '[Exercise] update exercise set',
    DeleteExercise = '[Exercise] Delete exercise',
    ResetReps = '[Exercise] Reset all reps',
    SetRepsActiveState = '[Exercise] Set reps active state',
    SetRepsCompleteState = '[Exercise] Set rep complete state',
    SetRepsIncompleteState = '[Exercise] Set rep incomplete state',
    SetInactiveReps = '[Exercise] Set reps to inactive state',
    AddRep = '[Exercise] Add rep',
    DeleteRep = '[Exercise] Delete rep',
    UpdateRep = '[Exercise] Update rep',
}

export class DeleteExercise implements Action {
    readonly type = EExerciseActions.DeleteExercise;
    constructor(public payload: {
        setId: string, exeId: string
    }) { }
}
export class UpdateExercise implements Action {
    readonly type = EExerciseActions.UpdateExercise;
    constructor(public payload: {
        exeId: string,
        exercise: ExerciseBean
    }) { }
}
export class ResetReps implements Action {
    readonly type = EExerciseActions.ResetReps;
    constructor(public payload: { exerciseId: string }) { }
}
export class SetInactiveReps implements Action {
    readonly type = EExerciseActions.SetInactiveReps;
    constructor(public payload: { exerciseId: string }) { }
}
export class SetRepsActiveState implements Action {
    readonly type = EExerciseActions.SetRepsActiveState;
    constructor(public payload: {
        exerciseId: string,
        activeIndex: number
    }) { }
}
export class SetRepsCompleteState implements Action {
    readonly type = EExerciseActions.SetRepsCompleteState;
    constructor(public payload: {
        exerciseId: string,
        completeIndex: number
    }) { }
}
export class SetRepsIncompleteState implements Action {
    readonly type = EExerciseActions.SetRepsIncompleteState;
    constructor(public payload: {
        exerciseId: string,
        incompleteIndex: number
    }) { }
}
export class AddRep implements Action {
    readonly type = EExerciseActions.AddRep;
    constructor(public payload: {
        copyFromIndex: number,
        exerciseId: string,
    }) { }
}
export class DeleteRep implements Action {
    readonly type = EExerciseActions.DeleteRep;
    constructor(public payload: {
        indexToDelete: number,
        exerciseId: string,
    }) { }
}
export class UpdateRep implements Action {
    readonly type = EExerciseActions.UpdateRep;
    constructor(public payload: {
        rep: Rep,
        exerciseId: string,
        repIndex: number
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
    UpdateExercise |
    UpdateRep
    ;
