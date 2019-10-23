import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IDataState } from '../state/data.state';
import { IWorkoutsState } from '../state/workouts.state';
import { IWorkoutDaysState } from '../state/workoutDays.state';
import { IExerciseSetsState } from '../state/ExerciseSets.state';
import { IExercisesState } from '../state/Exercises.state';
import { IExercisesMediaState } from '../state/ExercisesMedia.state';
import { workoutsState } from './workouts.selectors';
import { exercisesState } from './exercises.selectors';
import { daysState } from './workoutDays.selectors';
import { setsState } from './exerciseSets.selectors';
import { mediaState } from './ExercisesMedia.selectors';

const dataState = (state: IAppState) => state.data;

export const getWorkoutsData = createSelector(
    workoutsState,
    daysState,
    setsState,
    exercisesState,
    (workouts: IWorkoutsState,
        days: IWorkoutDaysState,
        sets: IExerciseSetsState,
        exercises: IExercisesState) => ({
            workouts: workouts,
            days: days,
            sets: sets,
            exercises: exercises,
        })
);
export const getImagesData = createSelector(
    mediaState,
    (media: IExercisesMediaState) => ({ media: media })
);

export const getHasDataBeenReset = createSelector(
    dataState,
    (state: IDataState) => state.hasDataBeenReset
);

export const getHasDataBeenLoaded = createSelector(
    dataState,
    (state: IDataState) => state.hasDataBeenLoaded
);

export const getError = createSelector(
    dataState,
    (state: IDataState) => state.error
);
