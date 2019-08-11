import * as fromWorkouts from '../actions/workouts.actions';

export interface WorkoutState {
    workoutId: number;
    lastSelectedDay: number;
}

export interface WorkoutsState {
    workouts: WorkoutState[];
}

export const initialState: WorkoutsState = {
    workouts : []
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

        default: {
            return state;
        }
    }
}

export const getWorkoutsLastSelectedDay =
    (state: WorkoutsState) => state.workouts;
