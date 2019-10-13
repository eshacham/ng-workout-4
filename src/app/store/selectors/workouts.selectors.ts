import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IWorkoutsState } from '../state/workouts.state';
import { WorkoutBean } from 'src/app/models/Workout';

const workoutsState = (state: IAppState) => state.workouts;

export const getWorkouts = createSelector(
  workoutsState,
  (workoutsMap: IWorkoutsState): WorkoutBean[] => {
    return Object.keys(workoutsMap.byId)
      .map(id => workoutsMap.byId[id]);
  }
);
export const getWorkout = (id: string) => createSelector(
  workoutsState,
  (workoutsMap: IWorkoutsState): WorkoutBean => {
    return workoutsMap.byId[id];
  }
);

export const getCurrentWorkoutId = createSelector(
  workoutsState,
  (workouts: IWorkoutsState) => workouts.selectedWorkoutId
);

export const getCurrentWorkout = createSelector(
  workoutsState,
  getCurrentWorkoutId,
  (workouts: IWorkoutsState, workoutId: string) => {
    const workout = workouts.byId[workoutId];
    if (!workout) {
      return { workout: null, selectedDayId: null };
    } else {
      return {
        workout: workout,
        selectedDayId: workout.selectedWorkoutDayId || workout.days[0]
      };
    }
  }
);
