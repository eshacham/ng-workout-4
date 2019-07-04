import { ExerciseSet } from './ExerciseSet';

export class WorkoutDay {

    public id: number;
    public name: string;
    public exerciseSets: ExerciseSet[];

    constructor(options: {
        id: number,
        name: string,
        exerciseSets: ExerciseSet[]}) {
        this.id = options.id;
        this.name = options.name;
        this.exerciseSets = options.exerciseSets;
    }
}
