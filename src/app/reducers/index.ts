import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromDefaults from './defaults.reducer';
import * as fromMusclesFilter from './musclesFilter.reducer';

export interface AppState {
  defaults: fromDefaults.DefaultsState;
  musclesFilter: fromMusclesFilter.MusclesFilterState;
}

export const reducers: ActionReducerMap<AppState> = {
  defaults: fromDefaults.reducer,
  musclesFilter: fromMusclesFilter.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
? []
: [];

export const getDefaultState = (state: AppState) => state.defaults;
export const getMusclesFilterState = (state: AppState) => state.musclesFilter;

export const getHasDefaultImagesBeenReset = createSelector(
  getDefaultState,
  fromDefaults.getHasDefaultImagesBeenReset
);
export const getHasDefaultWorkoutsBeenReset = createSelector(
  getDefaultState,
  fromDefaults.getHasDefaultWorkoutsBeenReset
);

export const getExerciseMusclesFilterState = createSelector(
  getMusclesFilterState,
  fromMusclesFilter.getExerciseMusclesFilter
);
export const getLibraryMusclesFilterState = createSelector(
  getMusclesFilterState,
  fromMusclesFilter.getLibraryMusclesFilter
);
