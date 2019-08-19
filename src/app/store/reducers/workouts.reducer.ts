import {
    WorkoutsActions,
    EWorkoutsActions} from '../actions/workouts.actions';
import {
    initialWorkoutsState,
    IWorkoutsState,
    IWorkoutState } from '../state/workouts.state';


export const workoutsReducers = (state = initialWorkoutsState, action: WorkoutsActions)
: IWorkoutsState => {
    switch (action.type) {
        case EWorkoutsActions.SetSelectedDay: {
            const oldWorkout: IWorkoutState = state.byId[action.payload.workoutId];
            return {
                byId: {
                    ...state.byId,
                    [action.payload.workoutId]: {
                        id: action.payload.workoutId,
                        selectedDayId: action.payload.dayId,
                        days: oldWorkout ? oldWorkout.days : { byId: {}}
                    }
                },
                currentWorkoutId: action.payload.workoutId,
                workoutId2Delete: state.workoutId2Delete
            };
        }
        case EWorkoutsActions.SetCurrentWorkoutId: {
            const oldWorkout: IWorkoutState = state.byId[action.payload.currentWorkoutId];
            return {
                byId: {
                    ...state.byId,
                    [action.payload.currentWorkoutId]: {
                        id: action.payload.currentWorkoutId,
                        selectedDayId: oldWorkout ? oldWorkout.selectedDayId : undefined,
                        days: oldWorkout ? oldWorkout.days : { byId: {}}
                    }
                },
                currentWorkoutId: action.payload.currentWorkoutId,
                workoutId2Delete: state.workoutId2Delete
            };
        }
        case EWorkoutsActions.DeleteWorkoutById: {
            return {
                ...state,
                workoutId2Delete: action.payload.workoutId
            };
        }
        case EWorkoutsActions.SetWorkoutDayState: {
            const oldWorkout: IWorkoutState = state.byId[state.currentWorkoutId];
            return {
                byId: {
                    ...state.byId,
                    [state.currentWorkoutId]: {
                        id: state.currentWorkoutId,
                        selectedDayId: action.payload.workoutDayId,
                        days: {
                             byId: {
                                ...oldWorkout.days.byId,
                                [action.payload.workoutDayId]: {
                                    id: action.payload.workoutDayId,
                                    runningExerciseSetIndex: action.payload.runningExerciseSetIndex,
                                    displayMode: action.payload.displayMode
                                }
                            }
                        }
                    }
                },
                currentWorkoutId: state.currentWorkoutId,
                workoutId2Delete: state.workoutId2Delete
            };
        }
        default: {
            return state;
        }
    }
};
