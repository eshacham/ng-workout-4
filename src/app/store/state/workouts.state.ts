export interface IWorkoutState {
    workoutId: number;
    lastSelectedDay: number;
}
export interface IWorkoutsState {
    workouts: IWorkoutState[];
    currentWorkoutId: number;
}
export const initialWorkoutsState: IWorkoutsState = {
    workouts: [],
    currentWorkoutId: undefined,
};
