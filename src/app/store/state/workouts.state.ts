import { DisplayMode, RunningState } from 'src/app/models/enums';

export interface IWorkoutDayState {
    workoutDayId: number;
    runningExerciseSetIndex?: number;
    displayMode: DisplayMode;
    runningState: RunningState;
}
export interface IWorkoutDays {
    byId: { [id: number]: IWorkoutDayState };
}

export interface IWorkoutState {
    workoutId: number;
    selectedDayId: number;
    days: IWorkoutDays;
}

export interface IWorkoutsState {
    byId: { [id: number]: IWorkoutState };
    currentWorkoutId: number;
    workoutId2Delete: number;
}

export const initialWorkoutsState: IWorkoutsState = {
    byId: {},
    currentWorkoutId: undefined,
    workoutId2Delete: undefined,
};
