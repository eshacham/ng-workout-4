import { WorkoutsActions, EWorkoutsActions, } from '../actions/workouts.actions';
import { initialWorkoutsState, IWorkoutsState } from '../state/workouts.state';
import { EWorkoutDaysActions, WorkoutDaysActions, Direction } from '../actions/workoutDays.actions';
import { GetDataSuccess, EDataActions } from '../actions/data.actions';
import { WorkoutBean } from 'src/app/models/Workout';

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
        case EWorkoutsActions.AddWorkout: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.workout.id]: action.payload.workout
                }
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
            let newMap: { [id: string]: WorkoutBean } ;
            let workout: WorkoutBean;
            ({ [action.payload.id]: workout, ...newMap } = state.byId);
            return {
                ...state,
                byId: newMap
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
        case EWorkoutDaysActions.DeleteWorkoutDay: {
            const oldDays = [...state.byId[state.selectedWorkoutId].days];
            const newDays = oldDays.filter(d => d !== action.payload.dayId);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [state.selectedWorkoutId]: {
                        ...state.byId[state.selectedWorkoutId],
                        days: newDays,
                        selectedWorkoutDayId: undefined,
                    }
                },
            };
        }
        case EWorkoutDaysActions.WorkoutDayAdded: {
            const oldDays = state.byId[action.payload.workoutId].days;
            const newDays = [...oldDays];
            newDays.splice(action.payload.index2AddFrom + 1, 0, action.payload.dayId);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.workoutId]: {
                        ...state.byId[action.payload.workoutId],
                        days: newDays,
                    }
                },
            };
        }
        case EWorkoutDaysActions.MoveWorkoutDay: {
            const oldDays = state.byId[state.selectedWorkoutId].days;
            const idfDay2Move = state.byId[state.selectedWorkoutId].selectedWorkoutDayId;
            const indexOfDay2Move = oldDays.indexOf(idfDay2Move);
            const offset = action.payload.direction === Direction.Forward ? 1 : -1;
            const newDays = moveDayByDirection(oldDays, indexOfDay2Move, offset);
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [state.selectedWorkoutId]: {
                        ...state.byId[state.selectedWorkoutId],
                        days: newDays,
                    }
                }
            };
        }
        case EWorkoutsActions.UpdateWorkout: {
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.workout.id]: action.payload.workout,
                },
            };
        }
        default: {
            return state;
        }
    }
};
function moveDayByDirection(oldDays: string[], index: number, offset: number) {
    const newDays = [...oldDays];
    const day2Move = newDays.splice(index, 1)[0];
    newDays.splice(index + offset, 0, day2Move);
    return newDays;
}
