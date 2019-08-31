export interface IWorkoutState {
    workoutId: number;
    selectedWorkoutDayId: number;
    // daysIds: number[];
}

export interface IWorkoutsState {
    selectedWorkoutId: number;
    workoutId2Delete?: number;
    // allIds: number [];
    byId: { [id: number]: IWorkoutState };
}

export const initialWorkoutsState: IWorkoutsState = {
    selectedWorkoutId: undefined,
    workoutId2Delete: undefined,
    // allIds: [],
    byId: {},
};
