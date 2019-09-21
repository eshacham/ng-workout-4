import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IExerciseSetsState } from '../state/ExerciseSets.state';
import { IExercisesState } from '../state/Exercises.state';
import { IExercisesMediaState } from '../state/ExercisesMedia.state';

export const exerciseSetsState = (state: IAppState): IExerciseSetsState => state.sets;
export const exercisesState = (state: IAppState): IExercisesState => state.exercises;
export const exercisesMediaState = (state: IAppState): IExercisesMediaState => state.media;

export const selectexerciseSet = (id: string) => createSelector(
    exerciseSetsState,
    exercisesState,
    exercisesMediaState,
    (exerciseSets: IExerciseSetsState,
        exercises: IExercisesState,
        media: IExercisesMediaState) => {
        const set = exerciseSets.byId[id];
        const exeIds = set.exercises;
        const exes = exeIds.map(exeId => exercises.byId[exeId]);
        const mediaIds = exes.map(e => e.mediaId);
        const medias = mediaIds.map(mediaId => media.byId[mediaId]);
        Object.freeze(exes);
        Object.freeze(medias);
        return { set: set, exercises: exes, media: medias };
    }
);
