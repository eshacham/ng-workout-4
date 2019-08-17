import * as fromWorkouts from '../actions/workouts.actions';

export interface WorkoutState {
    workoutId: number;
    lastSelectedDay: number;
}

export interface WorkoutsState {
    workouts: WorkoutState[];
    currentWorkoutId: number;
}

export const initialState: WorkoutsState = {
    workouts : [],
    currentWorkoutId: 0,
};

export function reducer(
    state = initialState,
    action: fromWorkouts.ActionsUnion
): WorkoutsState {
    switch (action.type) {
        case fromWorkouts.ActionTypes.SetLastSelectedWorkoutDay: {
            const workout = state.workouts.find(w => w.workoutId === action.payload.workoutId);
            if (workout) {
                workout.lastSelectedDay = action.payload.lastSelectedDay;
            } else {
                state.workouts.push(action.payload);
            }
            return {
                ...state,
                workouts: state.workouts
            };
        }
        case fromWorkouts.ActionTypes.SetCurrentWorkoutId: {
            return {
                ...state,
                currentWorkoutId: action.payload.currentWorkoutId
            };
        }

        default: {
            return state;
        }
    }
}

export const getWorkoutsLastSelectedDay =
    (state: WorkoutsState) => state.workouts;

export const getCurrentWorkoutId =
    (state: WorkoutsState) => state.currentWorkoutId;
