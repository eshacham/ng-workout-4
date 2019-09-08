import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IExercisesState } from '../state/Exercises.state';

export const exercisesState = (state: IAppState): IExercisesState => state.exercises;
