import { EDataActions, DataActions } from '../actions/data.actions';
import { initialExerciseSetsState, IExerciseSetsState } from '../state/ExerciseSets.state';
import { ExerciseSetActions, EExerciseSetActions } from '../actions/exerciseSets.actions';

export const exerciseSetsReducers = (state = initialExerciseSetsState,
    action: DataActions | ExerciseSetActions)
    : IExerciseSetsState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.sets.byId,
            };
        }
        case EExerciseSetActions.AddExerciseSets: {
            return {
                ...state,
                byId: [...Object.entries(state.byId),
                        ...action.payload.sets.map(set => {
                    return {
                        [0]: set.id,
                        [1]: set
                    };
                })]
                .reduce((map, obj) => (map[obj[0]] = obj[1], map), {})
            };
        }
        default: {
            return state;
        }
    }
};
