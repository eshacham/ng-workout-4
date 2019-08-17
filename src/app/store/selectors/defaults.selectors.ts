import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IDefaultsState } from '../state/defaults.state';

const defaultsState = (state: IAppState) => state.defaults;

export const selectHasDefaultImagesBeenReset = createSelector(
    defaultsState,
    (state: IDefaultsState) => state.hasDefaultImagesBeenReset
);

export const selectHasDefaultWorkoutsBeenReset = createSelector(
    defaultsState,
    (state: IDefaultsState) => state.hasDefaultWorkoutsBeenReset
);
