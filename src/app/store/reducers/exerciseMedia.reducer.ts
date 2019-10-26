import { initialExercisesMediaState, IExercisesMediaState } from '../state/ExercisesMedia.state';
import { DataActionsTypes, DataActions } from '../actions/data.actions';
import { MusclesFilterActionsTypes, MusclesFilterActions } from '../actions/musclesFilter.actions';
import { ExerciseMediaActionsTypes, ExerciseMediaActions } from '../actions/exercisesMedia.actions';
import { ExerciseSetActionsTypes, ExerciseSetActions } from '../actions/exerciseSets.actions';
import { removeItemFromMap } from './utils';

export const exercisesMediaReducers = (
    state = initialExercisesMediaState,
    action:
        DataActions |
        MusclesFilterActions |
        ExerciseMediaActions |
        ExerciseSetActions)
    : IExercisesMediaState => {
    switch (action.type) {
        case DataActionsTypes.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.media ? action.payload.media.byId : null,
            };
        }
        case MusclesFilterActionsTypes.AddExerciseMuscleFilter: {
            const mediaId = action.payload.mediaId;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [mediaId]: {
                        ...state.byId[mediaId],
                        muscles: [...state.byId[mediaId].muscles, action.payload.muscle]
                    }
                }
            };
        }
        case MusclesFilterActionsTypes.DeleteExerciseMuscleFilter: {
            const mediaId = action.payload.mediaId;
            const oldMuscles = state.byId[mediaId].muscles;
            const newMuscles = oldMuscles.filter(m => m !== action.payload.muscle);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [mediaId]: {
                        ...state.byId[mediaId],
                        muscles: newMuscles
                    }
                }
            };
        }
        case ExerciseMediaActionsTypes.UpdateExerciseMedia: {
            const mediaId = action.payload.id;
            const mediaUsageCounterUpdate = action.payload.mediaUsageCounterInc || 0;
            const mediaUsageCounter = state.byId[mediaId].mediaUsageCounter + mediaUsageCounterUpdate;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [mediaId]: {
                        ...state.byId[mediaId],
                        name: action.payload.name || state.byId[mediaId].name,
                        mediaUsageCounter: mediaUsageCounter
                    }
                }
            };
        }
        case ExerciseMediaActionsTypes.UpdateExerciseMediaUsage: {
            const ids2Update = action.payload.ids;
            const incFactor = action.payload.mediaUsageCounterInc;
            const mediasArray = Object.entries(state.byId);
            const newMap = mediasArray
                .reduce((map, obj) => (map[obj[0]] =
                    (ids2Update.includes(obj[0]))
                        ? { ...obj[1], mediaUsageCounter: obj[1].mediaUsageCounter + incFactor }
                        : obj[1],
                    map), {});
            return {
                ...state,
                byId: newMap
            };
        }
        case ExerciseSetActionsTypes.AddExerciseSets: {
            const ids2Update = action.payload.exes.map(exe => exe.mediaId);
            const mediasArray = Object.entries(state.byId);
            const newMap = mediasArray
                .reduce((map, obj) => (map[obj[0]] =
                    (ids2Update.includes(obj[0]))
                        ? { ...obj[1], mediaUsageCounter: obj[1].mediaUsageCounter + 1 }
                        : obj[1],
                    map), {});
            return {
                ...state,
                byId: newMap
            };
        }
        case ExerciseMediaActionsTypes.DeleteExerciseMediaSuccess: {
            return {
                ...state,
                byId: removeItemFromMap(action.payload.imageId, state)
            };
        }
        case ExerciseMediaActionsTypes.AddExerciseMediaSuccess: {
            const newId = action.payload.exerciseMedia.id;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [newId]: action.payload.exerciseMedia
                }
            };
        }
        default: {
            return state;
        }
    }
};
