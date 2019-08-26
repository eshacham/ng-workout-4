import { Exercise } from './Exercise';

export class ExerciseSet {

    public id: number;
    public exercises: Exercise[];

    constructor(options: { id: number, exercises: Exercise[] }) {
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
