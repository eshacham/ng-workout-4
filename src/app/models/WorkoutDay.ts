import { ExerciseSet } from './ExerciseSet';
import { JsonProperty } from 'json-typescript-mapper';

export class WorkoutDay {
    @JsonProperty('id')
    id: number;

    @JsonProperty('name')
    name: string;

    @JsonProperty({clazz: ExerciseSet, name: 'exerciseSets'})
    exerciseSets: ExerciseSet[];

    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.exerciseSets = undefined;
    }
}
