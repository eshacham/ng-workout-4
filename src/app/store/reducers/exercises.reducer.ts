import { EDataActions, DataActions } from '../actions/data.actions';
import { initialExercisesState, IExercisesState } from '../state/Exercises.state';
import { EExerciseActions, ExerciseActions } from '../actions/exercises.actions';
import { Rep } from 'src/app/models/Rep';
import { EExerciseSetActions, ExerciseSetActions } from '../actions/exerciseSets.actions';
import { ExerciseBean } from 'src/app/models/Exercise';

export const exercisesReducers = (
    state = initialExercisesState,
    action: DataActions | ExerciseActions | ExerciseSetActions)
    : IExercisesState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.exercises.byId,
            };
        }
        case EExerciseActions.ResetReps: {
            const newReps = Rep.copyRepsAndReset(state.byId[action.payload.exerciseId].reps);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.exerciseId]: {
                        ...state.byId[action.payload.exerciseId],
                        reps: newReps
                    }
                }
            };
        }
        case EExerciseActions.SetRepsActiveState: {
            const newReps = Rep.copyRepsAndSetToActive(state.byId[action.payload.exerciseId].reps, action.payload.activeIndex);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.exerciseId]: {
                        ...state.byId[action.payload.exerciseId],
                        reps: newReps
                    }
                }
            };
        }
        case EExerciseActions.SetRepsCompleteState: {
            const newReps = Rep.copyRepsAndSetToComplete(state.byId[action.payload.exerciseId].reps, action.payload.completeIndex);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.exerciseId]: {
                        ...state.byId[action.payload.exerciseId],
                        reps: newReps
                    }
                }
            };
        }
        case EExerciseActions.SetRepsIncompleteState: {
            const newReps = Rep.copyRepsAndSetToIncomplete(state.byId[action.payload.exerciseId].reps, action.payload.incompleteIndex);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.exerciseId]: {
                        ...state.byId[action.payload.exerciseId],
                        reps: newReps
                    }
                }
            };
        }
        case EExerciseActions.SetInactiveReps: {
            const newReps = Rep.copyRepsAndSetToInactive(state.byId[action.payload.exerciseId].reps);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.exerciseId]: {
                        ...state.byId[action.payload.exerciseId],
                        reps: newReps
                    }
                }
            };
        }
        case EExerciseSetActions.AddExerciseSets: {
            const newExes: { id: string, exe: ExerciseBean }[] =
            action.payload.exes.map(exe => ({id: exe.id, exe: exe}));
            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...newExes.reduce((map, obj) => (map[obj.id] = obj.exe, map), {})
                }
            };
        }
        case EExerciseActions.DeleteExercise: {
            let newMap: { [id: string]: ExerciseBean };
            let exercise: ExerciseBean;
            ({ [action.payload.exeId]: exercise, ...newMap } = state.byId);
            return {
                ...state,
                byId: newMap
            };
        }
        default: {
            return state;
        }
    }
};
