import { IDefaultsState, initialDefaultsState } from './defaults.state';
import { IMusclesFilterState, initialMusclesFilterState } from './musclesFilter.state';
import { IWorkoutsState, initialWorkoutsState } from './workouts.state';
import { IWorkoutDaysState, initialWorkoutDaysState } from './workoutDays.state';

export interface IAppState {
  defaults: IDefaultsState;
  musclesFilter: IMusclesFilterState;
  workouts: IWorkoutsState;
  days: IWorkoutDaysState;
}

export const initialAppState: IAppState = {
  defaults: initialDefaultsState,
  musclesFilter: initialMusclesFilterState,
  workouts: initialWorkoutsState,
  days: initialWorkoutDaysState
};

export const getInitialState = (): IAppState => initialAppState;
