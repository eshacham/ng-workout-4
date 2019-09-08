import { GetDataSuccess, EDataActions } from '../actions/data.actions';
import { initialExercisesState, IExercisesState } from '../state/Exercises.state';

export const exercisesReducers = (state = initialExercisesState,
    action: GetDataSuccess)
    : IExercisesState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.exercises.byId,
            };
        }
        default: {
            return state;
        }
    }
};
