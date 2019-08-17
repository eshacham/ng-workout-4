import {MusclesFilterActions, EMusclesFilterActions} from '../actions/musclesFilter.actions';
import { IMusclesFilterState, initialMusclesFilterState } from '../state/musclesFilter.state';

export const musclesFilterReducers = (state = initialMusclesFilterState, action: MusclesFilterActions)
: IMusclesFilterState => {
    switch (action.type) {
        case EMusclesFilterActions.SetExerciseMuscleFilter: {
            return {
                ...state,
                exerciseMusclesFilter: action.muscles
            };
        }
        case EMusclesFilterActions.SetLibraryMuscleFilter: {
            return {
                ...state,
                libraryMusclesFilter: action.muscles
            };
        }
        case EMusclesFilterActions.AddExerciseMuscleFilter: {
            return {
                ...state,
                exerciseMusclesFilter: [...state.exerciseMusclesFilter, action.muscle]
            };
        }
        case EMusclesFilterActions.AddLibraryMuscleFilter: {
            return {
                ...state,
                libraryMusclesFilter: [...state.libraryMusclesFilter, action.muscle]
            };
        }
        case EMusclesFilterActions.DeleteExerciseMuscleFilter: {
            return {
                ...state,
                exerciseMusclesFilter: state.exerciseMusclesFilter.filter(m => m !== action.muscle)
            };
        }
        case EMusclesFilterActions.DeleteLibraryMuscleFilter: {
            return {
                ...state,
                libraryMusclesFilter: state.libraryMusclesFilter.filter(m => m !== action.muscle)
            };
        }
        default: {
            return state;
        }
    }
};
