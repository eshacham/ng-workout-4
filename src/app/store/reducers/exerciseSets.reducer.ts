import { initialExerciseSetsState, IExerciseSetsState } from '../state/ExerciseSets.state';
import { EDataActions, DataActions } from '../actions/data.actions';
import { EWorkoutDaysActions, WorkoutDaysActions } from '../actions/workoutDays.actions';
import { ExerciseSetActions, EExerciseSetActions } from '../actions/exerciseSets.actions';
import { ExerciseActions, EExerciseActions } from '../actions/exercises.actions';
import { ExerciseSetBean } from 'src/app/models/ExerciseSet';
import { EWorkoutsActions, WorkoutsActions } from '../actions/workouts.actions';

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
            const newSets: { id: string, set: ExerciseSetBean }[] =
                action.payload.sets.map(set => ({ id: set.id, set: set }));
            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...newSets.reduce((map, obj) => (map[obj.id] = obj.set, map), {})
                }
            };
        }
        case EExerciseActions.DeleteExercise: {
            const oldExes = [...state.byId[action.payload.setId].exercises];
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
            let newMap: { [id: string]: ExerciseSetBean };
            let exe: ExerciseSetBean;
            ({ [action.payload.setId]: exe, ...newMap } = state.byId);
            return {
                ...state,
                byId: newMap
            };
        }
        case EWorkoutDaysActions.DeleteWorkoutDay: {
            const sets2Delete = action.payload.sets;
            let newMap: {[id: string]: ExerciseSetBean };
            newMap = !sets2Delete ? null : Object.entries(state.byId)
                .filter(([key, val]) => !sets2Delete.includes(val.id))
                .reduce((map, obj) => (map[obj[0]] = obj[1], map), {});
            return sets2Delete ? {
                ...state,
                byId: newMap
            } : state;
        }
        case EWorkoutsActions.DeleteWorkout: {
            const workoutId2Delete = action.payload.id;
            let newMap: {[id: string]: ExerciseSetBean };
            newMap = Object.entries(state.byId)
                .filter(([key, val]) => val.workoutId !== workoutId2Delete)
                .reduce((map, obj) => (map[obj[0]] = obj[1], map), {});
            return {
                ...state,
                byId: newMap
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
