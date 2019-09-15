import { EDataActions, DataActions } from '../actions/data.actions';
import { initialExercisesState, IExercisesState } from '../state/Exercises.state';
import { EExerciseActions, ExerciseActions } from '../actions/exercises.actions';
import { Rep } from 'src/app/models/Rep';
import { EExerciseSetActions, ExerciseSetActions } from '../actions/exerciseSets.actions';

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
            return {
                ...state,
                byId: [...Object.entries(state.byId),
                        ...action.payload.exes.map(exe => {
                    return {
                        [0]: exe.id,
                        [1]: exe
                    };
                })]
                .reduce((map, obj) => (map[obj[0]] = obj[1], map), {})
            };
        }
        default: {
            return state;
        }
    }
};
