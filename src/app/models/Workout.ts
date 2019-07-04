import { WorkoutDay } from './WorkoutDay';

export class Workout {

    public id: number;
    public name: string;
    public description: string;
    public days: WorkoutDay[];
    constructor (options: {
        id: number,
        name: string,
        description: string,
        days: WorkoutDay[]}) {
        this.id = options.id;
        this.name = options.name;
        this.description = options.description;
        this.days = options.days;
    }
}
