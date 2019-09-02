import { WorkoutDay } from './WorkoutDay';
import { Guid } from 'guid-typescript';


export class Workout {

    public id: string;
    public name: string;
    public description: string;
    public days: WorkoutDay[];
    constructor (options: {
        id: string,
        name: string,
        description: string,
        days: WorkoutDay[]}) {
        this.id = options.id;
        this.name = options.name;
        this.description = options.description;
        this.days = options.days;
    }
}
