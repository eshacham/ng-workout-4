import { Exercise } from './Exercise';
import { Guid } from 'guid-typescript';

export class ExerciseSet {

    public id: string;
    public exercises: Exercise[];

    constructor(options: { id: string, exercises: Exercise[] }) {
        this.id = options.id;
        this.exercises = options.exercises;
    }

    static delete(exerciseSets: ExerciseSet[], index: number) {
        const set = exerciseSets[index];
        if (set && set.exercises.length) {
            set.exercises.forEach((_, idx) => {
                Exercise.delete(set.exercises, idx);
            });
        }
        exerciseSets.splice(index, 1);
    }
}
