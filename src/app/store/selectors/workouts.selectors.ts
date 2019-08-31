import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IWorkoutsState, IWorkoutState } from '../state/workouts.state';

export const workoutsState = (state: IAppState): IWorkoutsState => state.workouts;

export const selectCurrentWorkoutId = createSelector(
  workoutsState,
  (workouts: IWorkoutsState) => workouts.selectedWorkoutId
);

export const SelectWorkoutId2Delete = createSelector(
  workoutsState,
  (workouts: IWorkoutsState) => workouts ? workouts.workoutId2Delete : null
);

export const selectCurrentWorkout = createSelector(
  workoutsState,
  selectCurrentWorkoutId,
  (workouts: IWorkoutsState, workoutId: number) => workouts.byId[workoutId]
);

export const selectCurrentWorkoutSelectedDayId = createSelector(
  selectCurrentWorkout,
  (workout: IWorkoutState) => workout ? {
    workoutId: workout.workoutId,
    dayId: workout.selectedWorkoutDayId
  } : null
);
