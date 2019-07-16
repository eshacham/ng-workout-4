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

    static delete(days: WorkoutDay[], index: number) {
        const day = days[index];
        if (day.exerciseSets.length) {
            day.exerciseSets.forEach((set, idx) =>  {
                ExerciseSet.delete(day.exerciseSets, idx);
            });
        }
        days.splice(index, 1);
    }
}
