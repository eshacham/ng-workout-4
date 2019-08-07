import * as fromDefaults from '../actions/defaults.actions';

export interface DefaultsState {
    hasDefaultWorkoutsBeenReset: boolean;
    hasDefaultImagesBeenReset: boolean;
}

export const initialState: DefaultsState = {
    hasDefaultWorkoutsBeenReset: false,
    hasDefaultImagesBeenReset: false
};

export function reducer(
    state = initialState,
    action: fromDefaults.ActionsUnion
): DefaultsState {
    switch (action.type) {
        case fromDefaults.ActionTypes.ResetDefaultWorkouts: {
            return {
                ...state,
                hasDefaultWorkoutsBeenReset: true
            };
        }
        case fromDefaults.ActionTypes.UpdatedDefaultWorkouts:
        case fromDefaults.ActionTypes.LoadedDefaultWorkouts: {
            return {
                ...state,
                hasDefaultWorkoutsBeenReset: false
            };
        }
        case fromDefaults.ActionTypes.ResetDefaultImages: {
            return {
                ...state,
                hasDefaultImagesBeenReset: true
            };
        }
        case fromDefaults.ActionTypes.UpdatedDefaultImages:
        case fromDefaults.ActionTypes.LoadedDefaultImages: {
            return {
                ...state,
                hasDefaultImagesBeenReset: false
            };
        }
        default: {
            return state;
        }
    }
}

export const getHasDefaultImagesBeenReset = (state: DefaultsState) => state.hasDefaultImagesBeenReset;
export const getHasDefaultWorkoutsBeenReset = (state: DefaultsState) => state.hasDefaultWorkoutsBeenReset;
