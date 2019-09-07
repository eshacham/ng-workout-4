import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { defaultsReducers } from './defaults.reducer';
import { musclesFilterReducers } from './musclesFilter.reducer';
import { workoutsReducers } from './workouts.reducer';
import { workoutDaysReducers } from './workoutDays.reducer';
import { dataReducers } from './data.reducer';
import { exerciseSetsReducers } from './exerciseSets.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    defaults: defaultsReducers,
    musclesFilter: musclesFilterReducers,
    workouts: workoutsReducers,
    days: workoutDaysReducers,
    sets: exerciseSetsReducers,
    data: dataReducers,
};
