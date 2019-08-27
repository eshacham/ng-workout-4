import { DisplayMode, RunningState } from 'src/app/models/enums';

export interface IWorkoutDayState {
    workoutDayId: number;
    runningExerciseSetIndex?: number;
    displayMode: DisplayMode;
    runningState: RunningState;
    exerciseSetIndex2Delete?: number;
}
export interface IWorkoutDays {
    byId: { [id: number]: IWorkoutDayState };
}

export interface IWorkoutState {
    workoutId: number;
    selectedWorkoutDayId: number;
    deleteSelectedWorkoutDay?: number;
    days: IWorkoutDays;
}

export interface IWorkoutsState {
    byId: { [id: number]: IWorkoutState };
    selectedWorkoutId: number;
    workoutId2Delete?: number;
    workoutDayId2AddFrom?: number;
}

export const initialWorkoutsState: IWorkoutsState = {
    byId: {},
    selectedWorkoutId: undefined,
    workoutId2Delete: undefined,
};
