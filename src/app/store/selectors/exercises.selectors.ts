import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IExercisesState } from '../state/Exercises.state';

export const exercisesState = (state: IAppState): IExercisesState => state.exercises;

export const selectExercises = (ids: string[]) => createSelector(
    exercisesState,
    (exercises: IExercisesState) => {
        return ids.map(id => exercises.byId[id]);
    }
  );
