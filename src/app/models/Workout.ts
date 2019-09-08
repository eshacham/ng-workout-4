import { WorkoutDay, WorkoutDayBean } from './WorkoutDay';
import { Guid } from 'guid-typescript';

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
}
export class WorkoutBean extends WorkoutBase {
    public days?: string[];
    selectedWorkoutDayId?: string;
    constructor (options: {
        id: string,
        name: string,
        description: string,
        days: string[]}) {
        super(options);
        this.days = options.days;
    }

    static newBean() {
        const id = Guid.raw();
        const day = WorkoutDayBean.newBean(id);
        const workout = new WorkoutBean({
            id: id,
            name: 'new workout',
            description: 'describe the workout',
            days: [ day.id ]
        });
        return { workout: workout, day: day };
    }

    static makeBean(workout: Workout): WorkoutBean {
        return {
            ...workout,
            days: workout.days.map(d => d.id),
        };
    }
}
