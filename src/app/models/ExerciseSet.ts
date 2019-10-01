import { Exercise } from './Exercise';
import { Bean } from './interfaces';

export class ExerciseSetBase implements Bean {
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
