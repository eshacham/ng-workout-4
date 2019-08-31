import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IWorkoutDaysState, IWorkoutDayState } from '../state/workoutDays.state';
import { selectCurrentWorkoutSelectedDayId } from '../selectors/workouts.selectors';

export const workoutDaysState = (state: IAppState): IWorkoutDaysState => state.days;

export const SelectWorkoutDayState = createSelector(
  workoutDaysState,
  selectCurrentWorkoutSelectedDayId,
  (days: IWorkoutDaysState, selectedWorkoutDayState: {workoutId: number, dayId: number}) =>
    (selectedWorkoutDayState && selectedWorkoutDayState.dayId) ? days.byId[selectedWorkoutDayState.dayId] : null
);

export const SelectWorkoutDayId2AddFrom = createSelector(
  workoutDaysState,
  (workoutDays: IWorkoutDaysState) => workoutDays.workoutDayId2AddFrom
);
export const SelectworkoutDayMoveDirection = createSelector(
  workoutDaysState,
  (workoutDays: IWorkoutDaysState) => workoutDays.workoutDayMoveState
);

export const SelectExerciseSetIndex2Delete = createSelector(
  SelectWorkoutDayState,
  (day: IWorkoutDayState) => day ? day.exerciseSetIndex2Delete : null
);

export const selectWorkoutDayId2Delete = createSelector(
  workoutDaysState,
  (workoutDays: IWorkoutDaysState) => workoutDays.deleteSelectedWorkoutDay
);
