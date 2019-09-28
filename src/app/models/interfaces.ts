import { WorkoutBean } from './Workout';
import { WorkoutDayBean } from './WorkoutDay';
import { ExerciseSetBean } from './ExerciseSet';
import { ExerciseBean } from './Exercise';
import { ExerciseMedia } from './ExerciseMedia';

export interface WorkoutsDataMaps {
    workouts: { byId: { [id: string]: WorkoutBean } };
    days: { byId: { [id: string]: WorkoutDayBean } };
    sets: { byId: { [id: string]: ExerciseSetBean } };
    exercises: { byId: { [id: string]: ExerciseBean } };
}

export interface AllDataMaps {
    workouts: { byId: { [id: string]: WorkoutBean } };
    days: { byId: { [id: string]: WorkoutDayBean } };
    sets: { byId: { [id: string]: ExerciseSetBean } };
    exercises: { byId: { [id: string]: ExerciseBean } };
    media: { byId: { [id: string]: ExerciseMedia } };
}

export interface MediaDataMaps {
    media: { byId: { [id: string]: ExerciseMedia } };
}