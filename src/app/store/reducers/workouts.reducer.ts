import { WorkoutsActions, EWorkoutsActions,  } from '../actions/workouts.actions';
import { initialWorkoutsState, IWorkoutsState } from '../state/workouts.state';
import { EWorkoutDaysActions, WorkoutDaysActions } from '../actions/workoutDays.actions';
import { GetDataSuccess, EDataActions } from '../actions/data.actions';

export const workoutsReducers = (state = initialWorkoutsState,
    action: WorkoutsActions | WorkoutDaysActions | GetDataSuccess)
    : IWorkoutsState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.workouts.byId,
            };
        }
        case EWorkoutsActions.SelectWorkout: {
            return {
                ...state,
                selectedWorkoutId: action.payload.workoutId,
            };
        }
        case EWorkoutsActions.UnselectWorkout: {
            return {
                ...state,
                selectedWorkoutId: undefined
            };
        }
        case EWorkoutsActions.DeleteWorkout: {
            return {
                ...state,
                workoutId2Delete: action.payload.workoutId,
            };
        }
        case EWorkoutsActions.WorkoutDeleted: {
            const workoutId2Delete = state.workoutId2Delete;
            return {
                ...state,
                workoutId2Delete: undefined,
                byId: {
                    ...state.byId,
                    [workoutId2Delete]: undefined
                }
            };
        }
        case EWorkoutDaysActions.SelectWorkoutDay: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.workoutId]: {
                        ...state.byId[action.payload.workoutId],
                        id: action.payload.workoutId,
                        selectedWorkoutDayId: action.payload.dayId,
                    }
                },
            };
        }
        case EWorkoutDaysActions.WorkoutDayDeleted: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [state.selectedWorkoutId]: {
                        ...state.byId[state.selectedWorkoutId],
                        selectedWorkoutDayId: undefined,
                    }
                },
            };
        }
        default: {
            return state;
        }
    }
};
