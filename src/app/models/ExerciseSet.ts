import { Exercise } from './Exercise';

export class ExerciseSet {

    public id: number;
    public exercises: Exercise[];

    constructor (options: {id: number, exercises: Exercise[]}) {
        this.id = options.id;
        this.exercises = options.exercises;
    }
}
