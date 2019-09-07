import { Exercise } from './Exercise';

export class ExerciseSetBase {

    public id: string;

    constructor(options: { id: string }) {
        this.id = options.id;
    }
}
export class ExerciseSet extends ExerciseSetBase {

    public exercises: Exercise[];

    constructor(options: { id: string, exercises: Exercise[] }) {
        super(options);
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

    static makeBean(set: ExerciseSet): ExerciseSetBean {
        return {
            ...set,
            exercises: set.exercises.map(e => e.id),
        };
    }
}
export class ExerciseSetBean extends ExerciseSetBase {

    public exercises: string[];

    constructor(options: { id: string, exercises: string[] }) {
        super(options);
        this.exercises = options.exercises;
    }
}
