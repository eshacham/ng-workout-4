import { Workout, WorkoutBean } from './Workout';
import { WorkoutDayBean, WorkoutDay } from './WorkoutDay';
import { ExerciseSetBean, ExerciseSet } from './ExerciseSet';
import { Exercise } from './Exercise';

export interface WorkoutsDataMaps {
    workouts: { byId: {[id: string]: WorkoutBean }};
    days: { byId: {[id: string]: WorkoutDayBean }};
    sets: { byId: {[id: string]: ExerciseSetBean }};
    exercises: { byId: { [id: string]: Exercise }};
}

export class DefaultWorkouts {
    public workouts: Workout[];
    constructor(options: { workouts: Workout[] }) {
        this.workouts = options.workouts;
    }

    get flat(): WorkoutsDataMaps {
        const workoutsData: WorkoutsDataMaps = {
            workouts: { byId: {}},
            days: { byId: {}},
            sets: { byId: {}},
            exercises: { byId: {}},
        };
        for (const workout of this.workouts) {
            workoutsData.workouts.byId[`${workout.id}`] = Workout.makeBean(workout);
            for (const day of workout.days) {
                workoutsData.days.byId[`${day.id}`] = WorkoutDay.makeBean(day);
                for (const set of day.exerciseSets) {
                    workoutsData.sets.byId[`${set.id}`] = ExerciseSet.makeBean(set);
                    for (const exe of set.exercises) {
                        workoutsData.exercises.byId[`${exe.id}`] = exe;
                    }
                }
            }
        }
        return workoutsData;
    }
}
