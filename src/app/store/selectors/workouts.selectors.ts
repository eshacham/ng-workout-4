import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IWorkoutsState } from '../state/workouts.state';
import { WorkoutBean } from 'src/app/models/Workout';

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
  (workouts: IWorkoutsState, workoutId: string) => workouts.byId[workoutId]
);

export const selectCurrentWorkoutSelectedDayId = createSelector(
  selectCurrentWorkout,
  (workout: WorkoutBean) => workout ? {
    workoutId: workout.id,
    dayId: workout.selectedWorkoutDayId
  } : null
);
