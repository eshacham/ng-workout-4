
export class StateCache {

    private lastSelectedWorkoutDay: Map<string, number>;

   constructor () {
    this.lastSelectedWorkoutDay = new Map<string, number>();
   }

   getLastSelectedWorkoutDay(workoutName: string): number {
       if (this.lastSelectedWorkoutDay.has(workoutName)) {
        return this.lastSelectedWorkoutDay.get(workoutName);
       } else {
           this.lastSelectedWorkoutDay.set(workoutName, 0);
           return 0;
       }
   }

   setLastSelectedWorkoutDay(workoutName: string, workoutDayIndex: number) {
    this.lastSelectedWorkoutDay.set(workoutName, workoutDayIndex);
   }
}
