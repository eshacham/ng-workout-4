import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromDefaults from './defaults.reducer';

export interface AppState {
  defaults: fromDefaults.DefaultsState;
}

export const reducers: ActionReducerMap<AppState> = {
  defaults: fromDefaults.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
? []
: [];

export const getDefaultState = (state: AppState) => state.defaults;

export const getHasDefaultImagesBeenReset = createSelector(
  getDefaultState,
  fromDefaults.getHasDefaultImagesBeenReset
);
export const getHasDefaultWorkoutsBeenReset = createSelector(
  getDefaultState,
  fromDefaults.getHasDefaultWorkoutsBeenReset
);
