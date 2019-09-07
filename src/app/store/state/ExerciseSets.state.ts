import { ExerciseSetBean } from 'src/app/models/ExerciseSet';

export interface IExerciseSetsState {
    byId: { [id: string]: ExerciseSetBean };
}

export const initialExerciseSetsState: IExerciseSetsState = {
    byId: {},
};
