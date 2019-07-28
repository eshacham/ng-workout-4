import { WeightUnit } from './enums';

export class Rep {

    public weightUnit: WeightUnit;

    public weight: number;

    public times: number;

    public seconds: number;

    private _isCompleted: boolean;
    get isCompleted(): boolean {
        return this._isCompleted;
    }
    set isCompleted(value: boolean)  {
        this._isCompleted = value;
    }

    private _isActive: boolean;
    get isActive(): boolean {
        return this._isActive;
    }
    set isActive(value: boolean)  {
        this._isActive = value;
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
