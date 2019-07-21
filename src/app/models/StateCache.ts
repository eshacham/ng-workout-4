import { Muscles } from './enums';

export class StateCache {
    private _muscleFilter: Set<Muscles>;
    private lastSelectedWorkoutDay: Map<string, number>;

    constructor() {
        this.lastSelectedWorkoutDay = new Map<string, number>();
    }

    get muscleFilter(): Set<Muscles> {
        if (!this._muscleFilter) {
            this._muscleFilter = new Set();
        }
        return this._muscleFilter;
    }
    set muscleFilter(value: Set<Muscles>) {
        this._muscleFilter = value;
    }

    addMuscleToFilter(muscle: Muscles) {
        this.muscleFilter.add(muscle);
    }
    deleteMuscleFromFilter(muscle: Muscles) {
        this.muscleFilter.delete(muscle);
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
