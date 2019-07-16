
import { RepetitionSpeed, WeightType, Muscles } from './enums';
import { Grip } from './Grip';
import { Rep } from './Rep';
import { ExerciseMedia } from './ExerciseMedia';

export class Exercise {

    public name: string;
    public media: ExerciseMedia;
    public theGrip: Grip = new Grip();
    public repSpeed: RepetitionSpeed;
    public typeOfWeight: WeightType;
    public isFavorite: Boolean;
    public reps: Rep[];
    public restBetweenReps: number;
    public restAfterExercise: number;

    // get muscles() {
    //     return this.media.muscles;
    // }

    constructor(options: {
         name: string,
         media: ExerciseMedia,
         theGrip?: Grip,
         repSpeed: RepetitionSpeed,
         typeOfWeight?: WeightType,
         isFavorite: Boolean,
         reps: Rep[],
         restBetweenReps: number,
         restAfterExercise: number}
        ) {
        this.name = options.name;
        this.media = options.media;
        this.theGrip = options.theGrip || new Grip();
        this.repSpeed = options.repSpeed;
        this.typeOfWeight = options.typeOfWeight || WeightType.NoWeight;
        this.isFavorite = options.isFavorite;
        this.restBetweenReps = options.restBetweenReps;
        this.restAfterExercise = options.restAfterExercise;
        this.reps = options.reps;
        this.media.mediaUsageCounter++;
    }

    static delete(exercises: Exercise[], index: number) {
        exercises[index].media.mediaUsageCounter--;
        exercises.splice(index, 1);
    }
}
