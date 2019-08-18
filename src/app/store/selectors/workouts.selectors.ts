import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IWorkoutsState } from '../state/workouts.state';

export const workoutsState = (state: IAppState) => state.workouts;

export const selectCurrentWorkoutId = createSelector(
  workoutsState,
  (state: IWorkoutsState) => state.currentWorkoutId
);
export const selectWorkoutsLastSelectedDay = createSelector(
  workoutsState,
  (state: IWorkoutsState) => state.workouts
);
export const selectCurrentWorkoutLastSelectedDay = createSelector(
  selectWorkoutsLastSelectedDay,
  selectCurrentWorkoutId,
  (workouts, id) => workouts.find(w => w.workoutId === id)
);

export const SelectWorkoutId2Delete = createSelector(
  workoutsState,
  (state: IWorkoutsState) => state.workoutId2Delete
);
