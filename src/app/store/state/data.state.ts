import { Workout } from '../../models/Workout';

export interface IDataState {
    workouts: Workout[];
    // selectedWorkout: Workout;
}

export const initialDataState: IDataState = {
    workouts: null,
    // selectedWorkout: null
};
