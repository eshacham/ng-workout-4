import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { defaultsReducers } from './defaults.reducer';
import { musclesFilterReducers } from './musclesFilter.reducer';
import { workoutsReducers } from './workouts.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    defaults: defaultsReducers,
    musclesFilter: musclesFilterReducers,
    workouts: workoutsReducers
};
