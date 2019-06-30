
import { RepetitionSpeed, WeightType, Muscles } from './enums';
import { Grip } from './Grip';
import { Rep } from './Rep';
import { JsonProperty } from 'json-typescript-mapper';

export class Exercise {
    @JsonProperty('name')
    name: string;

    @JsonProperty('imageUrl')
    imageUrl: string;

    @JsonProperty({clazz: Grip, name: 'grip' })
    theGrip: Grip;

    @JsonProperty('repetition')
    repSpeed: RepetitionSpeed;

    @JsonProperty('weightType')
    typeOfWeight: WeightType;

    @JsonProperty('isFavorite')
    isFavorite: Boolean;

    @JsonProperty({clazz: Rep, name: 'reps' })
    reps: Rep[];

    @JsonProperty('restBetweenReps')
    restBetweenReps: number;

    @JsonProperty('restAfterExercise')
    restAfterExercise: number;

    @JsonProperty('muscles')
    muscles: Muscles[];

    constructor() {
        this.name = void 0;
        this.imageUrl = void 0;
        this.theGrip = void 0;
        this.repSpeed = void 0;
        this.typeOfWeight = void 0;
        this.isFavorite = void 0;
        this.restBetweenReps = void 0;
        this.restAfterExercise = void 0;
        this.reps = void 0;
        this.muscles = void 0;
    }
}
