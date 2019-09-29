import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IExercisesState } from '../state/Exercises.state';

export const exercisesState = (state: IAppState): IExercisesState => state.exercises;

export const getMediaIdsByDay = (dayId: string) => createSelector(
    exercisesState,
    (exercises: IExercisesState) => {
        const exesArray = Object.entries(exercises.byId);
        const mediaIds = exesArray
                .filter(([key, val]) => val.dayId === dayId)
                .map(([key, val]) => val.mediaId);
        return mediaIds;
    }
);
export const getMediaIdsByWorkout = (workoutId: string) => createSelector(
    exercisesState,
    (exercises: IExercisesState) => {
        const exesArray = Object.entries(exercises.byId);
        const mediaIds = exesArray
                .filter(([key, val]) => val.workoutId === workoutId)
                .map(([key, val]) => val.mediaId);
        return mediaIds;
    }
);
