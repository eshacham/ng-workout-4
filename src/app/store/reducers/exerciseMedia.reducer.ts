import { initialExercisesMediaState, IExercisesMediaState } from '../state/ExercisesMedia.state';
import { EDataActions, DataActions } from '../actions/data.actions';
import { EMusclesFilterActions, MusclesFilterActions } from '../actions/musclesFilter.actions';
import { EExerciseMediaActions, ExerciseMediaActions } from '../actions/exercisesMedia.actions';
import { EExerciseSetActions, ExerciseSetActions } from '../actions/exerciseSets.actions';
import { ExerciseMedia } from 'src/app/models/ExerciseMedia';

export const exercisesMediaReducers = (
    state = initialExercisesMediaState,
    action:
        DataActions |
        MusclesFilterActions |
        ExerciseMediaActions |
        ExerciseSetActions)
    : IExercisesMediaState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.media ? action.payload.media.byId : null,
            };
        }
        case EMusclesFilterActions.AddExerciseMuscleFilter: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.mediaId]: {
                        ...state.byId[action.payload.mediaId],
                        muscles: [...state.byId[action.payload.mediaId].muscles, action.payload.muscle]
                    }
                }
            };
        }
        case EMusclesFilterActions.DeleteExerciseMuscleFilter: {
            const oldMuscles = state.byId[action.payload.mediaId].muscles;
            const newMuscles = oldMuscles.filter(m => m !== action.payload.muscle);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.mediaId]: {
                        ...state.byId[action.payload.mediaId],
                        muscles: newMuscles
                    }
                }
            };
        }
        case EExerciseMediaActions.UpdateExerciseMedia: {
            const mediaUsageCounterUpdate = action.payload.mediaUsageCounterInc || 0;
            const mediaUsageCounter = state.byId[action.payload.id].mediaUsageCounter + mediaUsageCounterUpdate;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.id]: {
                        ...state.byId[action.payload.id],
                        name: action.payload.name || state.byId[action.payload.id].name,
                        mediaUsageCounter: mediaUsageCounter
                    }
                }
            };
        }
        case EExerciseMediaActions.UpdateBulkExerciseMedia: {
            const ids2Update = action.payload.ids;
            const incFacotr = action.payload.mediaUsageCounterInc;
            const mediasArray = Object.entries(state.byId);
            const newMap = mediasArray
                .reduce((map, obj) => (map[obj[0]] =
                    (ids2Update.includes(obj[0]))
                        ? { ...obj[1], mediaUsageCounter: obj[1].mediaUsageCounter + incFacotr }
                        : obj[1],
                    map), {});
            return {
                ...state,
                byId: newMap
            };
        }
        case EExerciseSetActions.AddExerciseSets: {
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
        case EExerciseMediaActions.DeleteExerciseMedia: {
            let newMap: { [id: string]: ExerciseMedia };
            let media: ExerciseMedia;
            ({ [action.payload.id]: media, ...newMap } = state.byId);
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
