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
        const exes = Object.values(exercises.byId)
            .filter(exercise => exeIds.includes(exercise.id));
        return { set: set, exercises: exes };
    }
);
