import { Exercise, ExerciseBean } from './Exercise';
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
    toBean(workoutId: string, dayId: string): ExerciseSetBean {
        return {
            ...this,
            exercises: this.exercises.map(e => e.id),
            workoutId: workoutId,
            workoutDayId: dayId
        };
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
    static create(options: {
        id: string,
        workoutId: string,
        dayId: string,
        exercises: ExerciseBean[]
    }) {
        return new ExerciseSetBean({
            id: options.id,
            workoutId: options.workoutId,
            dayId: options.dayId,
            exercises: options.exercises.map(exe => exe.id)
        });
    }
}
