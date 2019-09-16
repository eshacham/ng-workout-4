import { Action } from '@ngrx/store';
import { ExerciseBean } from 'src/app/models/Exercise';

export enum EExerciseActions {
    ResetReps = '[Exercise] Reset all reps',
    SetRepsActiveState = '[Exercise] Set reps active state',
    SetRepsCompleteState = '[Exercise] Set rep complete state',
    SetRepsIncompleteState = '[Exercise] Set rep incomplete state',
    SetInactiveReps = '[Exercise] Set reps to inactive state',
    DeleteExercise = '[Exercise] Delete exercise',
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
    constructor(public payload: {
        setId: string,
        exeId: string
    }) { }
}

export type ExerciseActions =
    ResetReps |
    SetRepsActiveState |
    SetRepsCompleteState |
    SetRepsIncompleteState |
    SetInactiveReps |
    DeleteExercise
    ;
