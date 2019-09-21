import { WorkoutBean } from 'src/app/models/Workout';

export interface IWorkoutsState {
    selectedWorkoutId: string;
    workoutId2Delete?: string;
    byId: { [id: string]: WorkoutBean };
}

export const initialWorkoutsState: IWorkoutsState = {
    selectedWorkoutId: undefined,
    workoutId2Delete: undefined,
    byId: {},
};
