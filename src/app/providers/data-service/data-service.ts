import { StateCache } from '../../models/StateCache';
import { Injectable } from '@angular/core';

import { Workout } from '../../models/Workout';
import { WorkoutDaysPage } from 'src/app/pages/workout-days/workout-days.page';

@Injectable()
export class DataServiceProvider {

  private workouts: Workout[];

  constructor() {
    this.state = new StateCache();
  }

  private state: StateCache;
  setLastSelectedWorkoutDay(workoutName: string, workoutDayIndex: number) {
    this.state.setLastSelectedWorkoutDay(workoutName, workoutDayIndex);
   }
  getLastSelectedWorkoutDay(workoutName: string): number {
    return this.state.getLastSelectedWorkoutDay(workoutName);
   }

   setWorkouts(workouts: Workout[]) {
    this.workouts = workouts;
    console.log('caching workouts', workouts.map(w => w.id));
   }

   getWorkout(id: number): Workout {
     console.log(`servicing workout ${id} from `, this.workouts);
     const workout = this.workouts.filter(w => w.id === id);
     console.log(`found workout ${id}`, workout);
     return workout[0];
   }

}
