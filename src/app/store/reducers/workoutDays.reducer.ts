import { WorkoutDaysActions, EWorkoutDaysActions } from '../actions/workoutDays.actions';
import { initialWorkoutDaysState, IWorkoutDaysState } from '../state/workoutDays.state';
import { EDataActions, DataActions } from '../actions/data.actions';
import { WorkoutsActions, EWorkoutsActions } from '../actions/workouts.actions';
import { ExerciseSetActions, EExerciseSetActions } from '../actions/exerciseSets.actions';

export const workoutDaysReducers = (state = initialWorkoutDaysState,
    action: WorkoutDaysActions |
    WorkoutsActions |
    DataActions |
    ExerciseSetActions)
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
                workoutDayId2AddFrom: action.payload.dayId
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
        case EWorkoutDaysActions.UpdateWorkoutDay: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.dayId]: {
                        ...state.byId[action.payload.dayId],
                        name: action.payload.name
                    }
                },
            };
        }
        case EWorkoutDaysActions.DeleteWorkoutDay: {
            return {
                ...state,
                deleteSelectedWorkoutDay: action.payload.dayId
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
                    [action.payload.dayId]: {
                        ...state.byId[action.payload.dayId],
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
                    [action.payload.dayId]: {
                        ...state.byId[action.payload.dayId],
                        exerciseSetIndex2Delete: undefined
                    }
                },
            };
        }
        case EExerciseSetActions.AddExerciseSets: {
            const oldSets = [ ...state.byId[action.payload.dayId].exerciseSets ];
            const newSets = action.payload.sets.map(s => s.id);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.dayId]: {
                        ...state.byId[action.payload.dayId],
                        exerciseSets: oldSets.concat(newSets)
                    }
                },
            };
        }
        default: {
            return state;
        }
    }
};
