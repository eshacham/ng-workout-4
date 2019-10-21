import { DataActions, DataActionsTypes } from '../actions/data.actions';
import { IDataState, initialDataState } from '../state/data.state';

export const dataReducers =
(state = initialDataState, action: DataActions)
: IDataState => {
    switch (action.type) {
        case DataActionsTypes.GetDataSuccess: {
            return {
                ...state,
                hasDataBeenLoaded: true,
                error: null,
            };
        }
        case DataActionsTypes.DataReset: {
            return {
                ...state,
                hasDataBeenReset: true,
                error: null,
            };
        }
        case DataActionsTypes.ImagesSavedSuccess:
        case DataActionsTypes.WorkoutsSavedSuccess: {
            return {
                ...state,
                hasDataBeenReset: false,
                error: null,
            };
        }
        case DataActionsTypes.GetDataError: {
            return {
                ...state,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
