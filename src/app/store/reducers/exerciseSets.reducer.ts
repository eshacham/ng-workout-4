import { EDataActions, DataActions } from '../actions/data.actions';
import { initialExerciseSetsState, IExerciseSetsState } from '../state/ExerciseSets.state';
import { ExerciseSetActions, EExerciseSetActions } from '../actions/exerciseSets.actions';
import { ExerciseSetBean, ExerciseSetBase } from 'src/app/models/ExerciseSet';
import { ExerciseSetAction } from 'src/app/models/enums';
import { ExerciseActions, EExerciseActions } from '../actions/exercises.actions';
import { EWorkoutDaysActions, WorkoutDaysActions } from '../actions/workoutDays.actions';

export const exerciseSetsReducers = (state = initialExerciseSetsState,
    action: DataActions | ExerciseSetActions | ExerciseActions | WorkoutDaysActions)
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
            const sets = action.payload.sets;
            const newMap = Object.entries(state.byId)
                .filter(([key, val]) => !sets.includes(val.id))
                .reduce((map, obj) => (map[obj[0]] = obj[1], map), {});
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
