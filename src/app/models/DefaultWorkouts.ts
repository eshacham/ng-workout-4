import { Workout } from './Workout';
import { JsonProperty } from 'json-typescript-mapper';

export class DefaultWorkouts {

    @JsonProperty({clazz: Workout, name: 'workouts'})
    workouts: Workout[];

    constructor() {
        this.workouts = void 0;
    }
}
