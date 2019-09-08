import { DataActions, EDataActions } from '../actions/data.actions';
import { IDataState, initialDataState } from '../state/data.state';

export const defaultsReducers =
(state = initialDataState, action: DataActions)
: IDataState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                hasDataBeenLoaded: true,
            };
        }
        case EDataActions.ResetWorkouts: {
            return {
                ...state,
                hasWorkoutsBeenReset: true
            };
        }
        case EDataActions.WorkoutsUpdated: {
        // case EDataActions.LoadedWorkouts: {
            return {
                ...state,
                hasWorkoutsBeenReset: false
            };
        }
        case EDataActions.ResetImages: {
            return {
                ...state,
                hasImagesBeenReset: true
            };
        }
        case EDataActions.ImagesUpdated:
        case EDataActions.LoadedImages: {
            return {
                ...state,
                hasImagesBeenReset: false
            };
        }
        default: {
            return state;
        }
    }
};
