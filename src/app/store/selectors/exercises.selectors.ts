import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IExercisesState } from '../state/Exercises.state';

export const exercisesState = (state: IAppState): IExercisesState => state.exercises;

export const selectWorkoutDay = (ids: string[]) => createSelector(
    exercisesState,
    (exercises: IExercisesState) => {
        return Object.values(exercises.byId)
            .filter(exercise => ids.includes(exercise.id));
    }
  );
