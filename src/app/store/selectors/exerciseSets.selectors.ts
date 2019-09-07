import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IExerciseSetsState } from '../state/ExerciseSets.state';

export const exerciseSetsState = (state: IAppState): IExerciseSetsState => state.sets;
