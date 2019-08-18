import {WorkoutsActions, EWorkoutsActions} from '../actions/workouts.actions';
import { initialWorkoutsState, IWorkoutsState } from '../state/workouts.state';

export const workoutsReducers = (state = initialWorkoutsState, action: WorkoutsActions)
: IWorkoutsState => {
    switch (action.type) {
        case EWorkoutsActions.SetLastSelectedWorkoutDay: {
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
        case EWorkoutsActions.SetCurrentWorkoutId: {
            const workout = state.workouts.find(w => w.workoutId === action.payload.currentWorkoutId);
            if (!workout) {
                state.workouts.push({ workoutId: action.payload.currentWorkoutId, lastSelectedDay: 0});
            }
            return {
                ...state,
                currentWorkoutId: action.payload.currentWorkoutId
            };
        }
        case EWorkoutsActions.DeleteWorkout: {
            return {
                ...state,
                workoutId2Delete: action.payload.workoutId
            };
        }
        default: {
            return state;
        }
    }
};
