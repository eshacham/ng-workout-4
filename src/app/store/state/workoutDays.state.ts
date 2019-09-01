import { DisplayMode, RunningState } from 'src/app/models/enums';
import { Direction } from '../actions/workoutDays.actions';

export interface IWorkoutDayStateChange {
    workoutDayId: string;
    runningExerciseSetIndex?: number;
    displayMode: DisplayMode;
    runningState: RunningState;
    exerciseSetIndex2Delete?: number;
    // exercisesIds: number[];
}
export interface IWorkoutDayState extends IWorkoutDayStateChange {
    workoutId: string;
    // exercisesIds: number[];
}

export interface IWorkoutDaysState {
    workoutDayId2AddFrom?: string;
    deleteSelectedWorkoutDay?: string;
    workoutDayMoveState?: Direction;
    byId: { [id: string]: IWorkoutDayState };
}

export const initialWorkoutDaysState: IWorkoutDaysState = {
    workoutDayId2AddFrom: undefined,
    deleteSelectedWorkoutDay: undefined,
    workoutDayMoveState: undefined,
    byId: {},
};
