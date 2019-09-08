import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IDataState } from '../state/data.state';
import { IWorkoutsState } from '../state/workouts.state';
import { IWorkoutDaysState } from '../state/workoutDays.state';
import { IExerciseSetsState } from '../state/ExerciseSets.state';
import { IExercisesState } from '../state/Exercises.state';

const dataState = (state: IAppState) => state.data;
const workoutsState = (state: IAppState) => state.workouts;
const daysState = (state: IAppState) => state.days;
const setsState = (state: IAppState) => state.sets;
const exercisesState = (state: IAppState) => state.exercises;

export const selectWorkoutsData = createSelector(
    workoutsState,
    daysState,
    setsState,
    exercisesState,
    (workouts: IWorkoutsState,
        days: IWorkoutDaysState,
        sets: IExerciseSetsState,
        exercises: IExercisesState) => {
        const data = {
            workouts: workouts,
            days: days,
            sets: sets,
            exercises: exercises,
        };
        return data;
    }
);

export const selectHasDataBeenLoaded = createSelector(
    dataState,
    (state: IDataState) => state.hasDataBeenLoaded
);

export const selectHasImagesBeenReset = createSelector(
    dataState,
    (state: IDataState) => state.hasImagesBeenReset
);

export const selectHasWorkoutsBeenReset = createSelector(
    dataState,
    (state: IDataState) => state.hasWorkoutsBeenReset
);
