import { initialExercisesMediaState, IExercisesMediaState } from '../state/ExercisesMedia.state';
import { EDataActions, DataActions } from '../actions/data.actions';
import { EMusclesFilterActions, MusclesFilterActions } from '../actions/musclesFilter.actions';
import { EExerciseMediaActions, ExerciseMediaActions } from '../actions/exercisesMedia.actions';

export const exercisesMediaReducers = (
    state = initialExercisesMediaState,
    action: DataActions | MusclesFilterActions | ExerciseMediaActions)
    : IExercisesMediaState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.media.byId,
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
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.mediaId]: {
                        ...state.byId[action.payload.mediaId],
                        name: action.payload.name
                    }
                }
            };
        }
        default: {
            return state;
        }
    }
};
