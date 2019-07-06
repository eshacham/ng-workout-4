import { Muscles } from './enums';

export class StateCache {
    private _muscleFilter: Set<Muscles>;
    private lastSelectedWorkoutDay: Map<string, number>;

    constructor() {
        this.lastSelectedWorkoutDay = new Map<string, number>();
        this._muscleFilter = new Set();
    }

    get muscleFilter(): Set<Muscles> {
        return this._muscleFilter;
    }

    addMuscleToFilter(muscle: Muscles) {
        this._muscleFilter.add(muscle);
    }
    deleteMuscleFromFilter(muscle: Muscles) {
        this._muscleFilter.delete(muscle);
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
