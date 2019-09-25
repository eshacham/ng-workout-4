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

    // static delete(exerciseSets: ExerciseSet[], index: number) {
    //     const set = exerciseSets[index];
    //     if (set && set.exercises.length) {
    //         set.exercises.forEach((_, idx) => {
    //             ExerciseBean.delete(set.exercises, idx);
    //         });
    //     }
    //     exerciseSets.splice(index, 1);
    // }
}
export class ExerciseSetBean extends ExerciseSetBase {
    public exercises: string[];
    public workoutId: string;
    public workoutDayId: string;

    constructor(options: {
        id: string,
        exercises: string[],
        workoutId: string,
        dayId: string
    }) {
        super(options);
        this.exercises = options.exercises;
        this.workoutDayId = options.dayId;
        this.workoutId = options.workoutId;
    }

    static makeBean(set: ExerciseSet, workoutId, dayId): ExerciseSetBean {
        return {
            ...set,
            exercises: set.exercises.map(e => e.id),
            workoutId: workoutId,
            workoutDayId: dayId
        };
    }
}
