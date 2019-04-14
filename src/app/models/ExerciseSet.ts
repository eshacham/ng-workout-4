import { Exercise } from './Exercise';
import { JsonProperty } from 'json-typescript-mapper';

export class ExerciseSet {
    @JsonProperty('id')
    id: number;

    @JsonProperty({clazz: Exercise, name: 'exercises'})
    exercises: Exercise[];

    constructor () {
        this.id = undefined;
        this.exercises = undefined;
    }
}
