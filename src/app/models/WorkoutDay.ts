import { ExerciseSet } from './ExerciseSet';

export class WorkoutDayBase {

    public id: string;
    public name: string;

    constructor(options: {
        id: string,
        name: string
    }) {
        this.id = options.id;
        this.name = options.name;
    }
}
export class WorkoutDay extends WorkoutDayBase {

    public exerciseSets: ExerciseSet[];

    constructor(options: {
        id: string,
        name: string,
        exerciseSets: ExerciseSet[]
    }) {
        super(options);
        this.exerciseSets = options.exerciseSets;
    }

    static delete(days: WorkoutDay[], index: number) {
        const day = days[index];
        if (day && day.exerciseSets.length) {
            day.exerciseSets.forEach((_, idx) => {
                ExerciseSet.delete(day.exerciseSets, idx);
            });
        }
        days.splice(index, 1);
    }

    static makeBean(day: WorkoutDay): WorkoutDayBean {
        return {
            ...day,
            exerciseSets: day.exerciseSets.map(s => s.id),
        };
    }
}

export class WorkoutDayBean extends WorkoutDayBase {

    public exerciseSets: string[];

    constructor(options: {
        id: string,
        name: string,
        exerciseSets: string[]
    }) {
        super(options);
        this.exerciseSets = options.exerciseSets;
    }
}
