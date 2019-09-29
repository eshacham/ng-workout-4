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
        case EDataActions.DataReset: {
            return {
                ...state,
                hasDataBeenReset: true
            };
        }
        case EDataActions.ImagesUpdated:
        case EDataActions.WorkoutsUpdated: {
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
