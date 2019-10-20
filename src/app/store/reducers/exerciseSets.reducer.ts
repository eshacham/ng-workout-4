import { initialExerciseSetsState, IExerciseSetsState } from '../state/ExerciseSets.state';
import { EDataActions, DataActions } from '../actions/data.actions';
import { EWorkoutDaysActions, WorkoutDaysActions } from '../actions/workoutDays.actions';
import { ExerciseSetActions, EExerciseSetActions } from '../actions/exerciseSets.actions';
import { ExerciseActions, EExerciseActions } from '../actions/exercises.actions';
import { ExerciseSetBean } from 'src/app/models/ExerciseSet';
import { EWorkoutsActions, WorkoutsActions } from '../actions/workouts.actions';
import { removeItemFromMap, filterMapByRecordPredicate, createMapFromBeanArray } from './utils';

export const exerciseSetsReducers = (
    state = initialExerciseSetsState,
    action: DataActions |
            ExerciseSetActions |
            ExerciseActions |
            WorkoutDaysActions |
            WorkoutsActions)
    : IExerciseSetsState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.sets.byId,
            };
        }
        case EExerciseSetActions.AddExerciseSets: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...createMapFromBeanArray<ExerciseSetBean>(action.payload.sets)
                }
            };
        }
        case EExerciseActions.DeleteExercise: {
            const oldExes = state.byId[action.payload.setId].exercises;
            const newExes = oldExes.filter(exe => exe !== action.payload.exeId);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.setId]: {
                        ...state.byId[action.payload.setId],
                        exercises: newExes
                    }
                }
            };
        }
        case EExerciseSetActions.DeleteExerciseSet: {
            return {
                ...state,
                byId: removeItemFromMap(action.payload.setId, state)
            };
        }
        case EWorkoutDaysActions.DeleteWorkoutDay: {
            const dayId = action.payload.dayId;
            return {
                ...state,
                byId: filterMapByRecordPredicate(([key, val]) => val.dayId !== dayId, state),

            };
        }
        case EWorkoutsActions.DeleteWorkout: {
            const workoutId = action.payload.id;
            return {
                ...state,
                byId: filterMapByRecordPredicate(([key, val]) => val.workoutId !== workoutId, state)
            };
        }
        case EExerciseSetActions.SwitchExercisesInSet: {
            const oldExes = state.byId[action.payload.setId].exercises;
            const from = action.payload.lowIndex;
            const newExes = [
                ...oldExes.slice(0, from),
                oldExes[from + 1],
                oldExes[from],
                ...oldExes.slice(from + 2)
            ];
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.setId]: {
                        ...state.byId[action.payload.setId],
                        exercises: newExes
                    }
                },
            };
        }
        default: {
            return state;
        }
    }
};
