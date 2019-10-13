import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IWorkoutDaysState } from '../state/workoutDays.state';

export const workoutDaysState = (state: IAppState): IWorkoutDaysState => state.days;

export const getWorkoutDay = (id: string) => createSelector(
  workoutDaysState,
  (workoutDays: IWorkoutDaysState) => {
      return workoutDays.byId[id];
  }
);

export const getWorkoutDayMoveDirection = createSelector(
  workoutDaysState,
  (workoutDays: IWorkoutDaysState) => workoutDays.workoutDayMoveState
);

