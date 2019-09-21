
import { RepetitionSpeed, WeightType } from './enums';
import { Grip } from './Grip';
import { Rep } from './Rep';
import { ExerciseMedia } from './ExerciseMedia';

export class ExerciseBean {

    public id: string;
    public exerciseSetId?: string;
    public name: string;
    public mediaId: string;
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
        this.id = options.id;
        this.name = options.name;
        this.mediaId = options.mediaId;
        this.theGrip = options.theGrip || new Grip();
        this.repSpeed = options.repSpeed || RepetitionSpeed.NA;
        this.typeOfWeight = options.typeOfWeight || WeightType.NoWeight;
        this.isFavorite = options.isFavorite;
        this.restBetweenReps = options.restBetweenReps;
        this.restAfterExercise = options.restAfterExercise;
        this.reps = options.reps;
        if (options.exerciseSetId) {
            this.exerciseSetId = options.exerciseSetId;
        }
    }

    static delete(exercises: ExerciseBean[], index: number) {
        if (exercises[index] && exercises[index].mediaId) {
            // exercises[index].media.mediaUsageCounter--;
            exercises.splice(index, 1);
        }
    }

    static defaultExerciseBean(id: string, media: ExerciseMedia): ExerciseBean {
        return new ExerciseBean({
            id: id,
            name: media.name,
            mediaId: media.id,
            reps: [new Rep({
                times: 1
              })],
            repSpeed: RepetitionSpeed.OneOne,
            isFavorite: false,
            restBetweenReps: 20,
            restAfterExercise: 20
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
}
