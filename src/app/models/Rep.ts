import { WeightUnit } from './enums';

export class Rep {

    public weightUnit: WeightUnit;
    get HasWeight() {
        return this.weight || this.weight === 0;
    }

    public weight: number;
    set HasWeight(value) {
        this.weight = value ? 0 : null;
    }

    public times: number;
    get HasTimes() {
        return this.times || this.times === 0;
    }
    set HasTimes(value) {
        this.times = value ? 0 : null;
    }

    public seconds: number;
    get HasSeconds() {
        return this.seconds || this.seconds === 0;
    }
    set HasSeconds(value) {
        this.seconds = value ? 0 : null;
    }

    constructor (options: {
        weight?: number,
        weightUnit?: WeightUnit,
        times?: number,
        seconds?: number}
    ) {
        this.weight = options.weight;
        this.weightUnit = options.weightUnit || WeightUnit.Lbs;
        this.times = options.times;
        this.seconds = options.seconds;
    }
}
