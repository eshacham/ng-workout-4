// import { Muscles } from './enums';

export class StateCache {
    // private _exerciseMuscleFilter: Set<Muscles>;
    // private _libraryMuscleFilter: Set<Muscles>;
    private lastSelectedWorkoutDay: Map<string, number>;

    constructor() {
        this.lastSelectedWorkoutDay = new Map<string, number>();
    }

    // get exerciseMuscleFilter(): Set<Muscles> {
    //     if (!this._exerciseMuscleFilter) {
    //         this._exerciseMuscleFilter = new Set();
    //     }
    //     return this._exerciseMuscleFilter;
    // }

    // set exerciseMuscleFilter(value: Set<Muscles>) {
    //     this._exerciseMuscleFilter = value;
    // }
    // get libraryMuscleFilter(): Set<Muscles> {
    //     if (!this._libraryMuscleFilter) {
    //         this._libraryMuscleFilter = new Set();
    //     }
    //     return this._libraryMuscleFilter;
    // }
    // set libraryMuscleFilter(value: Set<Muscles>) {
    //     this._libraryMuscleFilter = value;
    // }

    // addMuscleToExerciseMuscleFilter(muscle: Muscles) {
    //     this.exerciseMuscleFilter.add(muscle);
    // }
    // deleteMuscleFromExerciseMuscleFilter(muscle: Muscles) {
    //     this.exerciseMuscleFilter.delete(muscle);
    // }

    // addMuscleToLibraryMuscleFilter(muscle: Muscles) {
    //     this.libraryMuscleFilter.add(muscle);
    // }
    // deleteMuscleFromLibraryMuscleFilter(muscle: Muscles) {
    //     this.libraryMuscleFilter.delete(muscle);
    // }

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
