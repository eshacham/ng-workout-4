import { StateCache } from '../../models/StateCache';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceProvider {

  constructor(public http: HttpClient) {
    this.state = new StateCache();
  }

  private state: StateCache;
  setLastSelectedWorkoutDay(workoutName: string, workoutDayIndex: number) {
    this.state.setLastSelectedWorkoutDay(workoutName, workoutDayIndex);
   }
  getLastSelectedWorkoutDay(workoutName: string): number {
    return this.state.getLastSelectedWorkoutDay(workoutName);
   }

   // future use only
   getWorkout() {
     return this.http.get('mock-url-for-future-use');
   }

}
