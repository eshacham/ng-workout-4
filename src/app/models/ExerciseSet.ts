import { ExerciseBean } from './Exercise';

export class ExerciseSetBase {
    public id: string;

    constructor(options: { id: string }) {
        this.id = options.id;
    }
}
export class ExerciseSet extends ExerciseSetBase {
    public exercises: ExerciseBean[];

    constructor(options: { id: string, exercises: ExerciseBean[] }) {
        super(options);
        this.exercises = options.exercises;
    }

    static delete(exerciseSets: ExerciseSet[], index: number) {
        const set = exerciseSets[index];
        if (set && set.exercises.length) {
            set.exercises.forEach((_, idx) => {
                ExerciseBean.delete(set.exercises, idx);
            });
        }
        exerciseSets.splice(index, 1);
    }
}
export class ExerciseSetBean extends ExerciseSetBase {
    public exercises: string[];
    public workoutDayId?: string;

    constructor(options: { id: string, exercises: string[], workoutDayId?: string }) {
        super(options);
        this.exercises = options.exercises;
        if (options.workoutDayId) {
            this.workoutDayId = options.workoutDayId;
        }
    }

    static makeBean(set: ExerciseSet, dayId): ExerciseSetBean {
        return {
            ...set,
            exercises: set.exercises.map(e => e.id),
            workoutDayId: dayId
        };
    }
}
