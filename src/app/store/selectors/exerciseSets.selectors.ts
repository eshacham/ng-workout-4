import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IExerciseSetsState } from '../state/ExerciseSets.state';
import { IExercisesState } from '../state/Exercises.state';

export const exerciseSetsState = (state: IAppState): IExerciseSetsState => state.sets;
export const exercisesState = (state: IAppState): IExercisesState => state.exercises;

export const selectexerciseSet = (id: string) => createSelector(
    exerciseSetsState,
    exercisesState,
    (exerciseSets: IExerciseSetsState, exercises: IExercisesState) => {
        const set = exerciseSets.byId[id];
        const exeIds = set.exercises;
        const exes = exeIds.map(exeId => exercises.byId[exeId]);
        Object.freeze(exes);
        return { set: set, exercises: exes };
    }
);
