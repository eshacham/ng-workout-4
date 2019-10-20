import { WorkoutDaysActions, EWorkoutDaysActions } from '../actions/workoutDays.actions';
import { initialWorkoutDaysState, IWorkoutDaysState } from '../state/workoutDays.state';
import { EDataActions, DataActions } from '../actions/data.actions';
import { WorkoutsActions, EWorkoutsActions } from '../actions/workouts.actions';
import { ExerciseSetActions, EExerciseSetActions } from '../actions/exerciseSets.actions';
import { filterMapByIds, removeItemFromMap } from './utils';
import { DisplayMode } from 'src/app/models/enums';

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
            const newMap = filterMapByIds(action.payload.days, state);
            return {
                ...state,
                byId: newMap
            };
        }
        case EWorkoutDaysActions.AddWorkoutDay: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.day.id]: action.payload.day
                }
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
                byId: removeItemFromMap(action.payload.dayId, state)
            };
        }
        case EWorkoutDaysActions.StartFirstExercise:
        case EWorkoutDaysActions.StartExercise:
        case EWorkoutDaysActions.ExerciseCompleted:
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
        case EWorkoutDaysActions.StopExercise: {
            let oldDisplayMode = state.byId[action.payload.id].displayMode || DisplayMode.Display;
            oldDisplayMode = oldDisplayMode === DisplayMode.Workout ? DisplayMode.Display : oldDisplayMode;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.id]: {
                        ...state.byId[action.payload.id],
                        runningExerciseSetIndex: action.payload.runningExerciseSetIndex,
                        displayMode: oldDisplayMode,
                        runningState: action.payload.runningState
                    }
                },
            };
        }
        case EExerciseSetActions.DeleteExerciseSet: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.dayId]: {
                        ...state.byId[action.payload.dayId],
                        exerciseSets: state.byId[action.payload.dayId].exerciseSets
                            .filter(s => s !== action.payload.setId)
                    }
                },
            };
        }
        case EExerciseSetActions.AddExerciseSets: {
            const oldSets = state.byId[action.payload.dayId].exerciseSets;
            const newSets = action.payload.sets.map(s => s.id);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.dayId]: {
                        ...state.byId[action.payload.dayId],
                        exerciseSets: [...oldSets, ...newSets]
                    }
                },
            };
        }
        case EWorkoutDaysActions.ReorderExerciseSets: {
            const oldSets = state.byId[action.payload.dayId].exerciseSets;
            const from = action.payload.fromIndex;
            const to = action.payload.toIndex;
            const newSets = [
                ...oldSets.slice(0, from),
                oldSets[to],
                ...oldSets.slice(from + 1, to),
                oldSets[from],
                ...oldSets.slice(to + 1)
            ];
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.dayId]: {
                        ...state.byId[action.payload.dayId],
                        exerciseSets: newSets
                    }
                },
            };
        }
        default: {
            return state;
        }
    }
};
