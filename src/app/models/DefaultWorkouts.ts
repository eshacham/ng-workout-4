import { Workout } from './Workout';

export class DefaultWorkouts {

public workouts: Workout[];

    constructor(options: {workouts: Workout[]}) {
        this.workouts = options.workouts;
    }
}
