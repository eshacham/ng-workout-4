import { IDefaultsState, initialDefaultsState } from './defaults.state';
import { IMusclesFilterState, initialMusclesFilterState } from './musclesFilter.state';
import { IWorkoutsState, initialWorkoutsState } from './workouts.state';

export interface IAppState {
  defaults: IDefaultsState;
  musclesFilter: IMusclesFilterState;
  workouts: IWorkoutsState;
}

export const initialAppState: IAppState = {
  defaults: initialDefaultsState,
  musclesFilter: initialMusclesFilterState,
  workouts: initialWorkoutsState,
};

export const getInitialState = (): IAppState => initialAppState;
