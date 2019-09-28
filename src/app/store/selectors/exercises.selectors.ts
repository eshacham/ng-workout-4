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

export const selectMediaIdsBySets = (setIds: string[]) => createSelector(
    exercisesState,
    (exercises: IExercisesState) => {
        const exesArray = Object.entries(exercises.byId);
        const mediaIds = exesArray
                .filter(([key, val]) => setIds.includes(val.setId))
                .map(([key, val]) => val.mediaId);
        return mediaIds;
    }
);
