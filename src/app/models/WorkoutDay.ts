import { ExerciseSet } from './ExerciseSet';
import { DisplayMode, RunningState } from './enums';

export class WorkoutDayBase {
    public id: string;
    public name: string;

    constructor(options: {
        id: string,
        name: string
    }) {
        this.id = options.id;
        if (options.name) {
            this.name = options.name;
        }
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
    runningExerciseSetIndex?: number;
    displayMode?: DisplayMode;
    runningState?: RunningState;
    exerciseSetIndex2Delete?: number;
    workoutId?: string;

    constructor(options: {
        id: string,
        name: string,
        exerciseSets: string[],
        runningExerciseSetIndex?: number,
        displayMode?: DisplayMode,
        runningState?: RunningState,
        exerciseSetIndex2Delete?: number,
        workoutId?: string;
    }) {
        super(options);
        if (options.exerciseSets) {
            this.exerciseSets = options.exerciseSets;
        }
        this.runningExerciseSetIndex = options.runningExerciseSetIndex;
        this.displayMode = options.displayMode;
        this.runningState = options.runningState;
        this.exerciseSetIndex2Delete = options.exerciseSetIndex2Delete;
        this.workoutId = options.workoutId;
    }
}
