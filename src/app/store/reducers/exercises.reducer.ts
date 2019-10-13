import { initialExercisesState, IExercisesState } from '../state/Exercises.state';
import { EDataActions, DataActions } from '../actions/data.actions';
import { EExerciseSetActions, ExerciseSetActions } from '../actions/exerciseSets.actions';
import { EExerciseActions, ExerciseActions } from '../actions/exercises.actions';
import { ExerciseBean } from 'src/app/models/Exercise';
import { Rep } from 'src/app/models/Rep';
import { WorkoutsActions, EWorkoutsActions } from '../actions/workouts.actions';
import { EWorkoutDaysActions, WorkoutDaysActions } from '../actions/workoutDays.actions';
import { newMapFromItems, removeItemFromMap, removeItemsFromMapByPredicate } from './utils';

export const exercisesReducers = (
    state = initialExercisesState,
    action: DataActions |
            ExerciseSetActions |
            ExerciseActions |
            WorkoutsActions |
            WorkoutDaysActions)
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
                byId: {
                    ...state.byId,
                    ...newMapFromItems<ExerciseBean>(action.payload.exes)
                }
            };
        }
        case EExerciseActions.DeleteExercise: {
            return {
                ...state,
                byId: removeItemFromMap(action.payload.exeId, state)
            };
        }
        case EExerciseActions.AddRep: {
            const exeId = action.payload.exerciseId;
            const newRep = Rep.copyRep(state.byId[exeId]
                .reps[action.payload.copyFromIndex]);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [exeId]: {
                        ...state.byId[exeId],
                        reps: [...state.byId[exeId].reps, newRep]
                    }
                }
            };
        }
        case EExerciseActions.DeleteRep: {
            const exeId = action.payload.exerciseId;
            const newReps = [...state.byId[exeId].reps];
            newReps.splice(action.payload.indexToDelete, 1);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [exeId]: {
                        ...state.byId[exeId],
                        reps: newReps
                    }
                }
            };
        }
        case EExerciseActions.UpdateExercise: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.exeId]: {
                        ...state.byId[action.payload.exeId],
                        ...action.payload.exercise
                    }
                }
            };
        }
        case EExerciseActions.UpdateRep: {
            const exeId = action.payload.exerciseId;
            const newReps = [...state.byId[exeId].reps];
            newReps[action.payload.repIndex] = action.payload.rep;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [exeId]: {
                        ...state.byId[exeId],
                        reps: newReps
                    }
                }
            };
        }
        case EWorkoutsActions.DeleteWorkout: {
            const workoutId = action.payload.id;
            return {
                ...state,
                byId: removeItemsFromMapByPredicate(([key, val]) => val.workoutId !== workoutId, state)
            };
        }
        case EWorkoutDaysActions.DeleteWorkoutDay: {
            const dayId = action.payload.dayId;
            return {
                ...state,
                byId: removeItemsFromMapByPredicate(([key, val]) => val.dayId !== dayId, state),
            };
        }
        default: {
            return state;
        }
    }
};
