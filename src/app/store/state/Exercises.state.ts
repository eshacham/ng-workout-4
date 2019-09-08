import { Exercise } from 'src/app/models/Exercise';

export interface IExercisesState {
    byId: { [id: string]: Exercise };
}

export const initialExercisesState: IExercisesState = {
    byId: {},
};
