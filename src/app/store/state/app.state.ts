import { IDefaultsState, initialDefaultsState } from './defaults.state';
import { IMusclesFilterState, initialMusclesFilterState } from './musclesFilter.state';
import { IWorkoutsState, initialWorkoutsState } from './workouts.state';
import { IWorkoutDaysState, initialWorkoutDaysState } from './workoutDays.state';
import { IDataState, initialDataState } from './data.state';

export interface IAppState {
  defaults: IDefaultsState;
  musclesFilter: IMusclesFilterState;
  workouts: IWorkoutsState;
  days: IWorkoutDaysState;
  data: IDataState;
}

export const initialAppState: IAppState = {
  defaults: initialDefaultsState,
  musclesFilter: initialMusclesFilterState,
  workouts: initialWorkoutsState,
  days: initialWorkoutDaysState,
  data: initialDataState
};

export const getInitialState = (): IAppState => initialAppState;
