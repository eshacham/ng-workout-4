import { ExerciseMedia } from 'src/app/models/ExerciseMedia';

export interface IExercisesMediaState {
    byId: { [id: string]: ExerciseMedia };
}

export const initialExercisesMediaState: IExercisesMediaState = {
    byId: {},
};
