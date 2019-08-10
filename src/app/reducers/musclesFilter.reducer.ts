import * as fromMusclesFilter from '../actions/musclesFilter.actions';
import { Muscles } from '../models/enums';

export interface MusclesFilterState {
    exerciseMusclesFilter: Set<Muscles>;
    libraryMusclesFilter: Set<Muscles>;
}

export const initialState: MusclesFilterState = {
    exerciseMusclesFilter: new Set(),
    libraryMusclesFilter: new Set()
};

const getNewSet = (set: Set<Muscles>) => {
    const allMuscles: Muscles[] = [];
    set.forEach(muscle => allMuscles.push(muscle));
    const newSet = new Set(allMuscles);
    return newSet;
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
            const newSet = getNewSet(state.exerciseMusclesFilter);
            newSet.add(action.muscle);
            return {
                ...state,
                exerciseMusclesFilter: newSet
            };
        }
        case fromMusclesFilter.ActionTypes.AddLibraryMuscleFilter: {
            const newSet = getNewSet(state.libraryMusclesFilter);
            newSet.add(action.muscle);
            return {
                ...state,
                libraryMusclesFilter: newSet
            };
        }
        case fromMusclesFilter.ActionTypes.DeleteExerciseMuscleFilter: {
            const newSet = getNewSet(state.exerciseMusclesFilter);
            newSet.delete(action.muscle);
            return {
                ...state,
                exerciseMusclesFilter: newSet
            };
        }
        case fromMusclesFilter.ActionTypes.DeleteLibraryMuscleFilter: {
            const newSet = getNewSet(state.libraryMusclesFilter);
            newSet.delete(action.muscle);
            return {
                ...state,
                libraryMusclesFilter: newSet
            };
        }
        default: {
            return state;
        }
    }
}

export const getExerciseMusclesFilter = (state: MusclesFilterState) => state.exerciseMusclesFilter;
export const getLibraryMusclesFilter = (state: MusclesFilterState) => state.libraryMusclesFilter;
