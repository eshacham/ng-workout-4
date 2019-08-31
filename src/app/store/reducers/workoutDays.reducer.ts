import { WorkoutDaysActions, EWorkoutDaysActions } from '../actions/workoutDays.actions';
import { initialWorkoutDaysState, IWorkoutDaysState } from '../state/workoutDays.state';

export const workoutDaysReducers = (state = initialWorkoutDaysState, action: WorkoutDaysActions)
    : IWorkoutDaysState => {
    switch (action.type) {
        case EWorkoutDaysActions.AddWorkoutDay: {
            return {
                ...state,
                workoutDayId2AddFrom: action.payload.workoutDayId
            };
        }
        case EWorkoutDaysActions.WorkoutDayAdded: {
            return {
                ...state,
                workoutDayId2AddFrom: undefined,
            };
        }
        case EWorkoutDaysActions.MoveWorkoutDay: {
            return {
                ...state,
                workoutDayMoveState: action.payload.direction
            };
        }
        case EWorkoutDaysActions.WorkoutDayMoved: {
            return {
                ...state,
                workoutDayMoveState: undefined
            };
        }
        case EWorkoutDaysActions.SelectWorkoutDay: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.dayId]: {
                        workoutId: action.payload.workoutId,
                        workoutDayId: action.payload.dayId,
                        ...state.byId[action.payload.dayId],
                    }
                },
            };
        }
        case EWorkoutDaysActions.DeleteWorkoutDay: {
            return {
                ...state,
                deleteSelectedWorkoutDay: action.payload.workoutDayId
            };
        }
        case EWorkoutDaysActions.WorkoutDayDeleted: {
            return {
                ...state,
                deleteSelectedWorkoutDay: undefined,
                byId: {
                    ...state.byId,
                    [state.deleteSelectedWorkoutDay]: undefined
                },
            };
        }
        case EWorkoutDaysActions.StartFirstExercise:
        case EWorkoutDaysActions.StartNextExercise:
        case EWorkoutDaysActions.ExerciseCompleted:
        case EWorkoutDaysActions.ExerciseStarted:
        case EWorkoutDaysActions.ChangeDisplayMode: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.workoutDayId]: {
                        ...state.byId[action.payload.workoutDayId],
                        runningExerciseSetIndex: action.payload.runningExerciseSetIndex,
                        displayMode: action.payload.displayMode,
                        runningState: action.payload.runningState
                    }
                },
            };
        }
        case EWorkoutDaysActions.DeleteExerciseSet: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.workoutDayId]: {
                        ...state.byId[action.payload.workoutDayId],
                        exerciseSetIndex2Delete: action.payload.exerciseSetIndex
                    }
                },
            };
        }
        case EWorkoutDaysActions.ExerciseSetDeleted: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.workoutDayId]: {
                        ...state.byId[action.payload.workoutDayId],
                        exerciseSetIndex2Delete: undefined
                    }
                },
            };
        }
        default: {
            return state;
        }
    }
};