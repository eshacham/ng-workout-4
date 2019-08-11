import * as fromMusclesFilter from '../actions/musclesFilter.actions';
import { Muscles } from '../models/enums';

export interface MusclesFilterState {
    exerciseMusclesFilter: Muscles[];
    libraryMusclesFilter: Muscles[];
}

export const initialState: MusclesFilterState = {
    exerciseMusclesFilter: [],
    libraryMusclesFilter: []
};

export function reducer(
    state = initialState,
    action: fromMusclesFilter.ActionsUnion
): MusclesFilterState {
    switch (action.type) {
        case fromMusclesFilter.ActionTypes.SetExerciseMuscleFilter: {
            return {
                ...state,
                exerciseMusclesFilter: action.muscles
            };
        }
        case fromMusclesFilter.ActionTypes.SetLibraryMuscleFilter: {
            return {
                ...state,
                libraryMusclesFilter: action.muscles
            };
        }
        case fromMusclesFilter.ActionTypes.AddExerciseMuscleFilter: {
            // const newSet = getNewSet(state.exerciseMusclesFilter);
            // newSet.add(action.muscle);
            return {
                ...state,
                exerciseMusclesFilter: [...state.exerciseMusclesFilter, action.muscle]
            };
        }
        case fromMusclesFilter.ActionTypes.AddLibraryMuscleFilter: {
            // const newSet = getNewSet(state.libraryMusclesFilter);
            // newSet.add(action.muscle);
            return {
                ...state,
                libraryMusclesFilter: [...state.libraryMusclesFilter, action.muscle]
            };
        }
        case fromMusclesFilter.ActionTypes.DeleteExerciseMuscleFilter: {
            // const inde;
            // newSet.delete(action.muscle);
            return {
                ...state,
                exerciseMusclesFilter: state.exerciseMusclesFilter.filter(m => m !== action.muscle)
            };
        }
        case fromMusclesFilter.ActionTypes.DeleteLibraryMuscleFilter: {
            // const newSet = getNewSet(state.libraryMusclesFilter);
            // newSet.delete(action.muscle);
            return {
                ...state,
                libraryMusclesFilter: state.libraryMusclesFilter.filter(m => m !== action.muscle)
            };
        }
        default: {
            return state;
        }
    }
}

export const getExerciseMusclesFilter = (state: MusclesFilterState) => state.exerciseMusclesFilter;
export const getLibraryMusclesFilter = (state: MusclesFilterState) => state.libraryMusclesFilter;
