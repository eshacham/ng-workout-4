import {
    WorkoutsActions,
    EWorkoutsActions
} from '../actions/workouts.actions';
import {
    initialWorkoutsState,
    IWorkoutsState,
    IWorkoutState
} from '../state/workouts.state';


export const workoutsReducers = (state = initialWorkoutsState, action: WorkoutsActions)
    : IWorkoutsState => {
    switch (action.type) {
        case EWorkoutsActions.SetSelectedDay: {
            const oldWorkout: IWorkoutState = state.byId[action.payload.workoutId];
            return {
                byId: {
                    ...state.byId,
                    [action.payload.workoutId]: {
                        workoutId: action.payload.workoutId,
                        selectedDayId: action.payload.dayId,
                        days: oldWorkout ? oldWorkout.days : { byId: {} }
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
                        workoutId: action.payload.currentWorkoutId,
                        selectedDayId: oldWorkout ? oldWorkout.selectedDayId : undefined,
                        days: oldWorkout ? oldWorkout.days : { byId: {} }
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
        case EWorkoutsActions.WorkoutDeleted: {
            const workoutId2Delete = state.workoutId2Delete;
            return {
                byId: {
                    ...state.byId,
                    [workoutId2Delete]: undefined
                },
                currentWorkoutId: workoutId2Delete === state.currentWorkoutId ? undefined : state.currentWorkoutId,
                workoutId2Delete: undefined
            };
        }
        case EWorkoutsActions.StartFirstExercise:
        case EWorkoutsActions.StartNextExercise:
        case EWorkoutsActions.ExerciseCompleted:
        case EWorkoutsActions.ExerciseStarted:
        case EWorkoutsActions.ChangeDisplayMode: {
            const oldWorkout: IWorkoutState = state.byId[state.currentWorkoutId];
            return {
                byId: {
                    ...state.byId,
                    [state.currentWorkoutId]: {
                        workoutId: state.currentWorkoutId,
                        selectedDayId: oldWorkout ? oldWorkout.selectedDayId : undefined,
                        days: {
                            byId: {
                                ...oldWorkout.days.byId,
                                [action.payload.workoutDayId]: {
                                    workoutDayId: action.payload.workoutDayId,
                                    runningExerciseSetIndex: action.payload.runningExerciseSetIndex,
                                    displayMode: action.payload.displayMode,
                                    runningState: action.payload.runningState
                                }
                            }
                        }
                    }
                },
                currentWorkoutId: state.currentWorkoutId,
                workoutId2Delete: state.workoutId2Delete
            };
        }
        case EWorkoutsActions.DeleteWorkoutDay: {
            const oldWorkout: IWorkoutState = state.byId[state.currentWorkoutId];
            return {
                byId: {
                    ...state.byId,
                    [state.currentWorkoutId]: {
                        workoutId: state.currentWorkoutId,
                        selectedDayId: oldWorkout ? oldWorkout.selectedDayId : undefined,
                        days: {
                            byId: {
                                ...oldWorkout.days.byId,
                                [action.payload.workoutDayId]: undefined
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
