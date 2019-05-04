import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { deserialize } from 'json-typescript-mapper';
import { StateCache } from '../../models/StateCache';
import { Workout } from '../../models/Workout';
import { DefaultWorkouts } from '../../models/DefaultWorkouts';
import { json } from '../../constants/defaultWorkouts';

const STORAGE_KEY = 'my_workouts';
@Injectable()
export class DataServiceProvider {

  private workouts: Workout[];

  constructor () {
    this.state = new StateCache();
  }

  private state: StateCache;
  setLastSelectedWorkoutDay(workoutName: string, workoutDayIndex: number) {
    this.state.setLastSelectedWorkoutDay(workoutName, workoutDayIndex);
   }
  getLastSelectedWorkoutDay(workoutName: string): number {
    return this.state.getLastSelectedWorkoutDay(workoutName);
   }

   getWorkout(id: number): Workout {
     console.log(`servicing workout ${id} from `, this.workouts);
     const workout = this.workouts.filter(w => w.id === id);
     console.log(`found workout ${id}`, workout);
     return workout[0];
   }

   async initWorkouts(storage: Storage) {
    await storage.ready();
    this.workouts = await storage.get(STORAGE_KEY);
    if (!this.workouts || !this.workouts.length) {
      console.log('initializing workouts');
      let defaultWorkouts: DefaultWorkouts;
      defaultWorkouts = deserialize(DefaultWorkouts, json);
      await storage.set(STORAGE_KEY, defaultWorkouts.workouts);
      this.workouts = defaultWorkouts.workouts;
    }
    console.log('cached workouts', this.workouts.map(w => w.id));
    return this.workouts;
   }

   async resetWorkouts(storage: Storage) {
    await storage.ready();
    let defaultWorkouts: DefaultWorkouts;
    defaultWorkouts = deserialize(DefaultWorkouts, json);
    await storage.set(STORAGE_KEY, defaultWorkouts.workouts);
    this.workouts = defaultWorkouts.workouts;
    console.log('workouts have been reset');
  }

}
