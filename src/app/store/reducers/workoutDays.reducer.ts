import { WorkoutDaysActions, EWorkoutDaysActions } from '../actions/workoutDays.actions';
import { initialWorkoutDaysState, IWorkoutDaysState } from '../state/workoutDays.state';
import { GetDataSuccess, EDataActions } from '../actions/data.actions';
import { WorkoutsActions, EWorkoutsActions } from '../actions/workouts.actions';

export const workoutDaysReducers = (state = initialWorkoutDaysState,
    action: WorkoutDaysActions | WorkoutsActions | GetDataSuccess)
    : IWorkoutDaysState => {
    switch (action.type) {
        case EDataActions.GetDataSuccess: {
            return {
                ...state,
                byId: action.payload.days.byId,
            };
        }
        case EWorkoutsActions.AddWorkout: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.day.id]: action.payload.day
                }
            };
        }
        case EWorkoutsActions.DeleteWorkout: {
            return {
                ...state,
                byId:
                    Object.entries(state.byId)
                        .filter(([key, value]) => value.workoutId !== action.payload.workoutId)
                        .reduce((map, obj) => (map[obj[0]] = obj[1], map), {})
            };
        }
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
                        id: action.payload.dayId,
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
            const workoutDayId2Delete = state.deleteSelectedWorkoutDay;
            return {
                ...state,
                deleteSelectedWorkoutDay: undefined,
                byId: Object.entries(state.byId)
                .filter(([key, value]) => key !== workoutDayId2Delete)
                .reduce((map, obj) => (map[obj[0]] = obj[1], map), {})
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
                    [action.payload.id]: {
                        ...state.byId[action.payload.id],
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
