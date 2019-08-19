import { DisplayMode } from 'src/app/models/enums';

export interface IWorkoutDayState {
    id: number;
    runningExerciseSetIndex: number;
    displayMode: DisplayMode;
}
export interface IWorkoutDays {
    byId: { [id: number]: IWorkoutDayState };
}

export interface IWorkoutState {
    id: number;
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
