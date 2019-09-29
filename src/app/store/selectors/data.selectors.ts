import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IDataState } from '../state/data.state';
import { IWorkoutsState } from '../state/workouts.state';
import { IWorkoutDaysState } from '../state/workoutDays.state';
import { IExerciseSetsState } from '../state/ExerciseSets.state';
import { IExercisesState } from '../state/Exercises.state';
import { IExercisesMediaState } from '../state/ExercisesMedia.state';

const dataState = (state: IAppState) => state.data;
const workoutsState = (state: IAppState) => state.workouts;
const daysState = (state: IAppState) => state.days;
const setsState = (state: IAppState) => state.sets;
const exercisesState = (state: IAppState) => state.exercises;
const mediaState = (state: IAppState) => state.media;

export const getWorkoutsData = createSelector(
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
export const getImagesData = createSelector(
    mediaState,
    (media: IExercisesMediaState) => {
        const data = {
            media: media,
        };
        return data;
    }
);

export const getHasDataBeenReset = createSelector(
    dataState,
    (state: IDataState) => state.hasDataBeenReset
);

export const getHasDataBeenLoaded = createSelector(
    dataState,
    (state: IDataState) => state.hasDataBeenLoaded
);
