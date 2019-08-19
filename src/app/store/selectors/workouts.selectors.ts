import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IWorkoutsState, IWorkoutState } from '../state/workouts.state';

export const workoutsState = (state: IAppState) => state.workouts;

export const selectCurrentWorkoutId = createSelector(
  workoutsState,
  (workouts: IWorkoutsState) => workouts.currentWorkoutId
);
export const SelectWorkoutId2Delete = createSelector(
  workoutsState,
  (workouts: IWorkoutsState) => workouts.workoutId2Delete
);

export const selectCurrentWorkout = createSelector(
  workoutsState,
  selectCurrentWorkoutId,
  (workouts: IWorkoutsState, workoutId: number) => workouts.byId[workoutId]
);
export const selectCurrentWorkoutSelectedDay = createSelector(
  selectCurrentWorkout,
  (workout: IWorkoutState) => workout.selectedDayId
);

export const SelectWorkoutDayState = createSelector(
  selectCurrentWorkout,
  selectCurrentWorkoutSelectedDay,
  (workout: IWorkoutState, day: number) => workout.days.byId[day]
);
