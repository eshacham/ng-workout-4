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
import * as fromWorkouts from './workouts.reducer';

export interface AppState {
  defaults: fromDefaults.DefaultsState;
  musclesFilter: fromMusclesFilter.MusclesFilterState;
  workouts: fromWorkouts.WorkoutsState;
}

export const reducers: ActionReducerMap<AppState> = {
  defaults: fromDefaults.reducer,
  musclesFilter: fromMusclesFilter.reducer,
  workouts: fromWorkouts.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const getWorkoutsState = (state: AppState) => state.workouts;
export const getCurrentWorkoutId = createSelector(
  getWorkoutsState,
  fromWorkouts.getCurrentWorkoutId,
);
export const getWorkoutsLastSelectedDay = createSelector(
  getWorkoutsState,
  fromWorkouts.getWorkoutsLastSelectedDay,
);
export const getCurrentWorkoutLastSelectedDay = createSelector(
  getWorkoutsLastSelectedDay,
  getCurrentWorkoutId,
  (workouts, id) => workouts.find(w => w.workoutId === id)
);


export const getDefaultState = (state: AppState) => state.defaults;
export const getHasDefaultImagesBeenReset = createSelector(
  getDefaultState,
  fromDefaults.getHasDefaultImagesBeenReset
);
export const getHasDefaultWorkoutsBeenReset = createSelector(
  getDefaultState,
  fromDefaults.getHasDefaultWorkoutsBeenReset
);

export const getMusclesFilterState = (state: AppState) => state.musclesFilter;
export const getExerciseMusclesFilterState = createSelector(
  getMusclesFilterState,
  fromMusclesFilter.getExerciseMusclesFilter
);
export const getLibraryMusclesFilterState = createSelector(
  getMusclesFilterState,
  fromMusclesFilter.getLibraryMusclesFilter
);
