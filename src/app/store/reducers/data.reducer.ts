import { DataActions, EDataActions } from '../actions/data.actions';
import { IDataState, initialDataState } from '../state/data.state';

export const dataReducers =
(state = initialDataState, action: DataActions)
: IDataState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                hasDataBeenLoaded: true,
            };
        }
        case EDataActions.WorkoutsReset: {
            return {
                ...state,
                hasWorkoutsBeenReset: true
            };
        }
        case EDataActions.WorkoutsUpdated: {
            return {
                ...state,
                hasWorkoutsBeenReset: false
            };
        }
        case EDataActions.ImagesReset: {
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
