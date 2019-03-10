import { GripWidth, GripType } from './enums';
import { JsonProperty } from 'json-typescript-mapper';

export class Grip {
    @JsonProperty('type')
    typeOfGrip: GripType;

    @JsonProperty('width')
    width: GripWidth;

    constructor(typeOfGrip = GripType.NoGrip, width = GripWidth.NoGrip) {
        this.typeOfGrip = typeOfGrip;
        this.width = width;
    }
}
