import { WorkoutDay } from './WorkoutDay';

export class WorkoutBase {

    public id: string;
    public name: string;
    public description: string;
    constructor (options: {
        id: string,
        name: string,
        description: string}) {
        this.id = options.id;
        this.name = options.name;
        this.description = options.description;
    }
}
export class Workout extends WorkoutBase {

    public days?: WorkoutDay[];
    constructor (options: {
        id: string,
        name: string,
        description: string,
        days: WorkoutDay[]}) {
        super(options);
        this.days = options.days;
    }
    static makeBean(workout: Workout): WorkoutBean {
        return {
            ...workout,
            days: workout.days.map(d => d.id),
        };
    }
}
export class WorkoutBean extends WorkoutBase {

    public id: string;
    public name: string;
    public description: string;
    public days?: string[];
    constructor (options: {
        id: string,
        name: string,
        description: string,
        days: string[]}) {
        super(options);
        this.days = options.days;
    }
}
