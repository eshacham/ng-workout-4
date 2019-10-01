import { ExerciseMedia } from 'src/app/models/ExerciseMedia';
import { IState } from './generics';

export interface IExercisesMediaState extends IState<ExerciseMedia> {
}

export const initialExercisesMediaState: IExercisesMediaState = {
    byId: {},
};
