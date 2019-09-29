import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IExercisesMediaState } from '../state/ExercisesMedia.state';
import { ExerciseMedia } from 'src/app/models/ExerciseMedia';

const exerciseMediaState = (state: IAppState) => state.media;

export const getExercisesMedias = createSelector(
  exerciseMediaState,
    (mediaMap: IExercisesMediaState): ExerciseMedia[] => {
        return Object.keys(mediaMap.byId)
        .map(id => mediaMap.byId[id]);
    }
);

export const getExerciseMedia = (id: string) => createSelector(
  exerciseMediaState,
  (mediaMap: IExercisesMediaState): ExerciseMedia => {
      return mediaMap.byId[id];
  }
);
