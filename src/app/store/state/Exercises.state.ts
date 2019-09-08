import { ExerciseBean } from 'src/app/models/Exercise';

export interface IExercisesState {
    byId: { [id: string]: ExerciseBean };
}

export const initialExercisesState: IExercisesState = {
    byId: {},
};
