import { DisplayMode, RunningState } from 'src/app/models/enums';
import { Direction } from '../actions/workoutDays.actions';

export interface IWorkoutDayStateChange {
    workoutDayId: number;
    runningExerciseSetIndex?: number;
    displayMode: DisplayMode;
    runningState: RunningState;
    exerciseSetIndex2Delete?: number;
    // exercisesIds: number[];
}
export interface IWorkoutDayState extends IWorkoutDayStateChange {
    workoutId: number;
    // exercisesIds: number[];
}

export interface IWorkoutDaysState {
    workoutDayId2AddFrom?: number;
    deleteSelectedWorkoutDay?: number;
    workoutDayMoveState?: Direction;
    byId: { [id: number]: IWorkoutDayState };
}

export const initialWorkoutDaysState: IWorkoutDaysState = {
    workoutDayId2AddFrom: undefined,
    deleteSelectedWorkoutDay: undefined,
    workoutDayMoveState: undefined,
    byId: {},
};
