import { DataActions, EDataActions } from '../actions/data.actions';
import { initialDataState, IDataState } from '../state/data.state';


export const dataReducers = (
    state = initialDataState,
    action: DataActions
): IDataState => {
    switch (action.type) {
        case EDataActions.GetWorkoutsSuccess: {
            return {
                ...state,
                entities:  action.payload
            };
        }
    default:
        return state;
    }
};
