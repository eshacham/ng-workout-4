import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IMusclesFilterState } from '../state/musclesFilter.state';

export const musclesFilterState = (state: IAppState) => state.musclesFilter;

export const selectExerciseMusclesFilterState = createSelector(
  musclesFilterState,
  (state: IMusclesFilterState) => state.exerciseMusclesFilter
);
export const selectLibraryMusclesFilterState = createSelector(
  musclesFilterState,
  (state: IMusclesFilterState) => state.libraryMusclesFilter
);
