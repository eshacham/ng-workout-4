import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { defaultsReducers } from './data.reducer';
import { musclesFilterReducers } from './musclesFilter.reducer';
import { workoutsReducers } from './workouts.reducer';
import { workoutDaysReducers } from './workoutDays.reducer';
import { exerciseSetsReducers } from './exerciseSets.reducer';
import { exercisesReducers } from './exercises.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    data: defaultsReducers,
    musclesFilter: musclesFilterReducers,
    workouts: workoutsReducers,
    days: workoutDaysReducers,
    sets: exerciseSetsReducers,
    exercises: exercisesReducers,
};
