
import { RepetitionSpeed, WeightType } from './enums';
import { Grip } from './Grip';
import { Rep } from './Rep';
import { ExerciseMedia } from './ExerciseMedia';

export class ExerciseBean {

    public id: string;
    public exerciseSetId?: string;
    public name: string;
    public media: ExerciseMedia;
    public theGrip: Grip = new Grip();
    public repSpeed: RepetitionSpeed;
    public typeOfWeight: WeightType;
    public isFavorite: Boolean;
    public reps: Rep[];
    public restBetweenReps: number;
    public restAfterExercise: number;

    constructor(options: {
        id: string,
        exerciseSetId?: string;
        name: string,
        media: ExerciseMedia,
        theGrip?: Grip,
        repSpeed: RepetitionSpeed,
        typeOfWeight?: WeightType,
        isFavorite: Boolean,
        reps: Rep[],
        restBetweenReps: number,
        restAfterExercise: number
    }
    ) {
        this.id = options.id;
        this.name = options.name;
        this.media = options.media;
        this.theGrip = options.theGrip || new Grip();
        this.repSpeed = options.repSpeed || RepetitionSpeed.NA;
        this.typeOfWeight = options.typeOfWeight || WeightType.NoWeight;
        this.isFavorite = options.isFavorite;
        this.restBetweenReps = options.restBetweenReps;
        this.restAfterExercise = options.restAfterExercise;
        this.reps = options.reps;
        this.media.mediaUsageCounter++;
        if (options.exerciseSetId) {
            this.exerciseSetId = options.exerciseSetId;
        }
    }

    static delete(exercises: ExerciseBean[], index: number) {
        if (exercises[index] && exercises[index].media) {
            exercises[index].media.mediaUsageCounter--;
            exercises.splice(index, 1);
        }
    }
}
