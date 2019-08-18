export interface IWorkoutState {
    workoutId: number;
    lastSelectedDay: number;
}
export interface IWorkoutsState {
    workouts: IWorkoutState[];
    currentWorkoutId: number;
    workoutId2Delete: number;
}
export const initialWorkoutsState: IWorkoutsState = {
    workouts: [],
    currentWorkoutId: undefined,
    workoutId2Delete: undefined
};
