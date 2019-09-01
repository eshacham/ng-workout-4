import { ExerciseSet } from './ExerciseSet';
import { Guid } from 'guid-typescript';

export class WorkoutDay {

    public id: Guid;
    public name: string;
    public exerciseSets: ExerciseSet[];

    constructor(options: {
        id: Guid,
        name: string,
        exerciseSets: ExerciseSet[]}) {
        this.id = options.id;
        this.name = options.name;
        this.exerciseSets = options.exerciseSets;
    }

    static delete(days: WorkoutDay[], index: number) {
        const day = days[index];
        if (day && day.exerciseSets.length) {
            day.exerciseSets.forEach((_, idx) =>  {
                ExerciseSet.delete(day.exerciseSets, idx);
            });
        }
        days.splice(index, 1);
    }
}
