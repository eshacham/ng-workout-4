import { DefaultsActions, EDefaultsAction } from '../actions/defaults.actions';
import { IDefaultsState, initialDefaultsState } from '../state/defaults.state';

export const defaultsReducers = (state = initialDefaultsState, action: DefaultsActions)
: IDefaultsState => {
    switch (action.type) {
        case EDefaultsAction.ResetDefaultWorkouts: {
            return {
                ...state,
                hasDefaultWorkoutsBeenReset: true
            };
        }
        case EDefaultsAction.UpdatedDefaultWorkouts:
        case EDefaultsAction.LoadedDefaultWorkouts: {
            return {
                ...state,
                hasDefaultWorkoutsBeenReset: false
            };
        }
        case EDefaultsAction.ResetDefaultImages: {
            return {
                ...state,
                hasDefaultImagesBeenReset: true
            };
        }
        case EDefaultsAction.UpdatedDefaultImages:
        case EDefaultsAction.LoadedDefaultImages: {
            return {
                ...state,
                hasDefaultImagesBeenReset: false
            };
        }
        default: {
            return state;
        }
    }
};
