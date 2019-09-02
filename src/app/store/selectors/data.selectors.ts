import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IDataState } from '../state/data.state';

const selectWorkouts = (state: IAppState) => state.data;

export const selectWorkoutsList = createSelector(
    selectWorkouts,
    (state: IDataState) => state.workouts
);
