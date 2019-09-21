import { initialExercisesMediaState, IExercisesMediaState } from '../state/ExercisesMedia.state';
import { EDataActions, DataActions } from '../actions/data.actions';

export const exercisesMediaReducers = (
    state = initialExercisesMediaState,
    action: DataActions )
    : IExercisesMediaState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.media.byId,
            };
        }
        default: {
            return state;
        }
    }
};
