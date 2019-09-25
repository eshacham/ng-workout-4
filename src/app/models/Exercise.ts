
import { RepetitionSpeed, WeightType } from './enums';
import { Grip } from './Grip';
import { Rep } from './Rep';
import { ExerciseMedia } from './ExerciseMedia';

export class Exercise  {
    public id: string;
    public name: string;
    public mediaId: string;
    public theGrip: Grip;
    public repSpeed: RepetitionSpeed;
    public typeOfWeight?: WeightType;
    public isFavorite: Boolean;
    public reps: Rep[];
    public restBetweenReps: number;
    public restAfterExercise: number;

    constructor(options: {
        id: string,
        name: string,
        mediaId: string,
        theGrip?: Grip,
        repSpeed: RepetitionSpeed,
        typeOfWeight?: WeightType,
        isFavorite: Boolean,
        reps: Rep[],
        restBetweenReps: number,
        restAfterExercise: number,
    }) {
        this.id = options.id;
        this.name = options.name;
        this.mediaId = options.mediaId;
        this.theGrip = options.theGrip || new Grip();
        this.repSpeed = options.repSpeed;
        if (options.typeOfWeight) {
            this.typeOfWeight = options.typeOfWeight;
        }
        this.isFavorite = options.isFavorite;
        this.reps = options.reps;
        this.restBetweenReps = options.restBetweenReps;
        this.restAfterExercise = options.restAfterExercise;
    }
}
export class ExerciseBean extends Exercise {

    public workoutId: string;
    public dayId: string;
    public setId: string;

    constructor(options: {
        id: string,
        workoutId: string;
        dayId: string;
        setId: string;
        name: string,
        mediaId: string,
        theGrip?: Grip,
        repSpeed: RepetitionSpeed,
        typeOfWeight?: WeightType,
        isFavorite: Boolean,
        reps: Rep[],
        restBetweenReps: number,
        restAfterExercise: number
    }
    ) {
        super(options);
        this.workoutId = options.workoutId;
        this.dayId = options.dayId;
        this.setId = options.setId;
    }

    // static delete(exercises: ExerciseBean[], index: number) {
    //     if (exercises[index] && exercises[index].mediaId) {
    //         exercises.splice(index, 1);
    //     }
    // }

    static defaultExerciseBean(
        id: string,
        setId: string,
        dayId: string,
        workoutId: string,
        media: ExerciseMedia,
        options?: { name: string }
    ): ExerciseBean {
        return new ExerciseBean({
            id: id,
            setId: setId,
            dayId: dayId,
            workoutId: workoutId,
            name: options && options.name ? options.name : media.name,
            mediaId: media.id,
            reps: [new Rep({
                times: 1
            })],
            repSpeed: RepetitionSpeed.OneOne,
            isFavorite: false,
            restBetweenReps: 20,
            restAfterExercise: 20,
        });
    }

    static copyExercise(exe: ExerciseBean, options?: {
        name?: string,
        media?: ExerciseMedia,
        theGrip?: Grip,
        repSpeed?: RepetitionSpeed,
        typeOfWeight?: WeightType,
        isFavorite?: Boolean,
        restBetweenReps?: number,
        restAfterExercise?: number
    }): ExerciseBean {
        return new ExerciseBean({
            ...exe,
            ...options
        });
    }

    static makeBean(exe: Exercise, workoutId, dayId, setId): ExerciseBean {
        return {
            ...exe,
            workoutId: workoutId,
            dayId: dayId,
            setId: setId
        };
    }
}
