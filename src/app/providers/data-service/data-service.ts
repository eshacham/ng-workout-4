import { StateCache } from '../../models/StateCache';
import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceProvider {

  public storage: any;

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


}
