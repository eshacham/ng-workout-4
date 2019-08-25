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
        case EWorkoutsActions.SelectWorkout: {
            const oldWorkout: IWorkoutState = state.byId[action.payload.workoutId];
            return {
                byId: {
                    ...state.byId,
                    [action.payload.workoutId]: {
                        workoutId: action.payload.workoutId,
                        selectedWorkoutDayId: oldWorkout ? oldWorkout.selectedWorkoutDayId : undefined,
                        days: oldWorkout ? oldWorkout.days : { byId: {} }
                    }
                },
                selectedWorkoutId: action.payload.workoutId,
                workoutId2Delete: state.workoutId2Delete
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
                selectedWorkoutId: workoutId2Delete === state.selectedWorkoutId ? undefined : state.selectedWorkoutId,
            };
        }
        case EWorkoutsActions.SelectWorkoutDay: {
            const oldWorkout: IWorkoutState = state.byId[action.payload.workoutId];
            return {
                byId: {
                    ...state.byId,
                    [action.payload.workoutId]: {
                        workoutId: action.payload.workoutId,
                        selectedWorkoutDayId: action.payload.dayId,
                        days: oldWorkout ? oldWorkout.days : { byId: {} }
                    }
                },
                selectedWorkoutId: action.payload.workoutId,
                workoutId2Delete: state.workoutId2Delete
            };
        }
        case EWorkoutsActions.DeleteWorkoutDay: {
            const oldWorkout: IWorkoutState = state.byId[state.selectedWorkoutId];
            return {
                byId: {
                    ...state.byId,
                    [state.selectedWorkoutId]: {
                        workoutId: state.selectedWorkoutId,
                        selectedWorkoutDayId: oldWorkout.selectedWorkoutDayId,
                        deleteSelectedWorkoutDay: action.payload.workoutDayId,
                        days: oldWorkout.days
                    }
                },
                selectedWorkoutId: state.selectedWorkoutId,
                workoutId2Delete: state.workoutId2Delete
            };
        }
        case EWorkoutsActions.WorkoutDayDeleted: {
            const oldWorkout: IWorkoutState = state.byId[state.selectedWorkoutId];
            return {
                byId: {
                    ...state.byId,
                    [state.selectedWorkoutId]: {
                        workoutId: state.selectedWorkoutId,
                        selectedWorkoutDayId: oldWorkout ? oldWorkout.selectedWorkoutDayId : undefined,
                        days: {
                            byId: {
                                ...oldWorkout.days.byId,
                                [action.payload.workoutDayId]: undefined
                            }
                        }
                    }
                },
                selectedWorkoutId: state.selectedWorkoutId,
                workoutId2Delete: state.workoutId2Delete
            };
        }
        case EWorkoutsActions.StartFirstExercise:
        case EWorkoutsActions.StartNextExercise:
        case EWorkoutsActions.ExerciseCompleted:
        case EWorkoutsActions.ExerciseStarted:
        case EWorkoutsActions.ChangeDisplayMode: {
            const oldWorkout: IWorkoutState = state.byId[state.selectedWorkoutId];
            return {
                byId: {
                    ...state.byId,
                    [state.selectedWorkoutId]: {
                        workoutId: state.selectedWorkoutId,
                        selectedWorkoutDayId: oldWorkout ? oldWorkout.selectedWorkoutDayId : undefined,
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
                selectedWorkoutId: state.selectedWorkoutId,
                workoutId2Delete: state.workoutId2Delete
            };
        }
        default: {
            return state;
        }
    }
};
