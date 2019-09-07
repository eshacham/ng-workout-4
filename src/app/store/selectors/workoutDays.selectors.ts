import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IWorkoutDaysState } from '../state/workoutDays.state';
import { selectCurrentWorkoutSelectedDayId } from '../selectors/workouts.selectors';
import { WorkoutDayBean } from 'src/app/models/WorkoutDay';

export const workoutDaysState = (state: IAppState): IWorkoutDaysState => state.days;

export const SelectWorkoutDayState = createSelector(
  workoutDaysState,
  selectCurrentWorkoutSelectedDayId,
  (days: IWorkoutDaysState, selectedWorkoutDayState: {workoutId: string, dayId: string}) =>
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
  (day: WorkoutDayBean) => day ? day.exerciseSetIndex2Delete : null
);

export const selectWorkoutDayId2Delete = createSelector(
  workoutDaysState,
  (workoutDays: IWorkoutDaysState) => workoutDays.deleteSelectedWorkoutDay
);
