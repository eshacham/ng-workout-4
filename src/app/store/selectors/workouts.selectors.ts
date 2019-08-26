import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IWorkoutsState, IWorkoutState } from '../state/workouts.state';

export const workoutsState = (state: IAppState) => state.workouts;

export const selectCurrentWorkoutId = createSelector(
  workoutsState,
  (workouts: IWorkoutsState) => workouts.selectedWorkoutId
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
  (workout: IWorkoutState) => workout ? workout.selectedWorkoutDayId : null
);

export const SelectWorkoutDayState = createSelector(
  selectCurrentWorkout,
  selectCurrentWorkoutSelectedDay,
  (workout: IWorkoutState, dayId: number) => workout ? workout.days.byId[dayId] : null
);

export const selectWorkoutDayId2Delete = createSelector(
  selectCurrentWorkout,
  (workout: IWorkoutState) => workout ? workout.deleteSelectedWorkoutDay : null
);

export const SelectExerciseSetIndex2Delete = createSelector(
  selectCurrentWorkout,
  selectCurrentWorkoutSelectedDay,
  (workout: IWorkoutState, dayId: number) => ({
    workoutDayId: dayId,
    exerciseSetIndex2Delete: workout ? workout.days.byId[dayId] ?
      workout.days.byId[dayId].exerciseSetIndex2Delete : null : null
  })
);
