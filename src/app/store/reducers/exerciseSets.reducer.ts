import { EDataActions, DataActions } from '../actions/data.actions';
import { initialExerciseSetsState, IExerciseSetsState } from '../state/ExerciseSets.state';
import { ExerciseSetActions, EExerciseSetActions } from '../actions/exerciseSets.actions';
import { ExerciseSetBean } from 'src/app/models/ExerciseSet';

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
            const newSets: { id: string, set: ExerciseSetBean }[] =
            action.payload.sets.map(set => ({id: set.id, set: set}));
            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...newSets.reduce((map, obj) => (map[obj.id] = obj.set, map), {})
                }
            };
        }
        // case EExerciseSetActions.DeleteExerciseSet: {
        //     return {
        //         ...state,
        //         byId: {
        //             ...state.byId,
        //             [action.payload.dayId]: {
        //                 ...state.byId[action.payload.dayId],
        //                 exerciseSets: state.byId[action.payload.dayId].exerciseSets
        //                     .filter(s => s !== action.payload.setId)
        //             }
        //         },
        //     };
        // }
        default: {
            return state;
        }
    }
};
