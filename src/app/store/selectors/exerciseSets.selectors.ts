import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IExerciseSetsState } from '../state/ExerciseSets.state';
import { IExercisesState } from '../state/Exercises.state';
import { IExercisesMediaState } from '../state/ExercisesMedia.state';
import { ExerciseSetBean } from 'src/app/models/ExerciseSet';
import { ExerciseBean } from 'src/app/models/Exercise';
import { ExerciseMediaBean } from 'src/app/models/ExerciseMedia';

export const exerciseSetsState = (state: IAppState): IExerciseSetsState => state.sets;
export const exercisesState = (state: IAppState): IExercisesState => state.exercises;
export const exercisesMediaState = (state: IAppState): IExercisesMediaState => state.media;

export const getExerciseSet = (id: string) => createSelector(
    exerciseSetsState,
    exercisesState,
    exercisesMediaState,
    (exerciseSets: IExerciseSetsState,
        exercises: IExercisesState,
        media: IExercisesMediaState) => {
        let set: ExerciseSetBean;
        let exes: ExerciseBean[];
        let medias: ExerciseMediaBean[];
        set = exerciseSets.byId[id];
        if (set) {
            const exeIds = set.exercises;
            exes = exeIds.map(exeId => exercises.byId[exeId]);
            const mediaIds = exes.map(e => e.mediaId);
            medias = mediaIds.map(mediaId => media ? media.byId[mediaId] : null);
            Object.freeze(exes);
            Object.freeze(medias);
        }
        return { set: set, exercises: exes, media: medias };
    }
);
