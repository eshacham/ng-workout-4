
export interface IWorkoutState {
    workoutId: string;
    selectedWorkoutDayId: string;
    // daysIds: number[];
}

export interface IWorkoutsState {
    selectedWorkoutId: string;
    workoutId2Delete?: string;
    // allIds: number [];
    byId: { [id: string]: IWorkoutState };
}

export const initialWorkoutsState: IWorkoutsState = {
    selectedWorkoutId: undefined,
    workoutId2Delete: undefined,
    // allIds: [],
    byId: {},
};
