import { GetDataSuccess, EDataActions } from '../actions/data.actions';
import { initialExerciseSetsState, IExerciseSetsState } from '../state/ExerciseSets.state';

export const exerciseSetsReducers = (state = initialExerciseSetsState,
    action: GetDataSuccess)
    : IExerciseSetsState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.sets.byId,
            };
        }
        default: {
            return state;
        }
    }
};
