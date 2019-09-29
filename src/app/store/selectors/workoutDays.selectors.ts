import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IWorkoutDaysState } from '../state/workoutDays.state';
import { getCurrentWorkoutSelectedDayId } from '../selectors/workouts.selectors';
import { WorkoutDayBean } from 'src/app/models/WorkoutDay';

export const workoutDaysState = (state: IAppState): IWorkoutDaysState => state.days;

export const getWorkoutDay = (id: string) => createSelector(
  workoutDaysState,
  (workoutDays: IWorkoutDaysState) => {
      return workoutDays.byId[id];
  }
);

export const getWorkoutDayState = createSelector(
  workoutDaysState,
  getCurrentWorkoutSelectedDayId,
  (days: IWorkoutDaysState, selectedWorkoutDayState: {workoutId: string, dayId: string}) =>
    (selectedWorkoutDayState && selectedWorkoutDayState.dayId) ?
    days.byId[selectedWorkoutDayState.dayId] : null
);

export const getWorkoutDayId2AddFrom = createSelector(
  workoutDaysState,
  (workoutDays: IWorkoutDaysState) => workoutDays.workoutDayId2AddFrom
);
export const getWorkoutDayMoveDirection = createSelector(
  workoutDaysState,
  (workoutDays: IWorkoutDaysState) => workoutDays.workoutDayMoveState
);

export const getWorkoutDayId2Delete = createSelector(
  workoutDaysState,
  (workoutDays: IWorkoutDaysState) => workoutDays.deleteSelectedWorkoutDay
);
