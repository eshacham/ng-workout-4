import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IDataState } from '../state/data.state';

const dataState = (state: IAppState) => state.data;

export const selectHasDataBeenLoaded = createSelector(
    dataState,
    (state: IDataState) => state.hasDataBeenLoaded
);

export const selectHasImagesBeenReset = createSelector(
    dataState,
    (state: IDataState) => state.hasImagesBeenReset
);

export const selectHasWorkoutsBeenReset = createSelector(
    dataState,
    (state: IDataState) => state.hasWorkoutsBeenReset
);
