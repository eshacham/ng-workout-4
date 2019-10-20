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
            };
        }
        case DataActionsTypes.DataReset: {
            return {
                ...state,
                hasDataBeenReset: true
            };
        }
        case DataActionsTypes.ImagesUpdated:
        case DataActionsTypes.WorkoutsUpdated: {
            return {
                ...state,
                hasDataBeenReset: false
            };
        }
        default: {
            return state;
        }
    }
};
