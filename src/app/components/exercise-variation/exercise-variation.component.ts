import { Component, OnInit, Input } from '@angular/core';
import { ExerciseSet } from 'src/app/models/ExerciseSet';
import { PopoverController } from '@ionic/angular';
import { Grip } from 'src/app/models/Grip';
import { WeightType, GripType, GripWidth, RepetitionSpeed } from 'src/app/models/enums';
import { ExerciseVariationPopoverComponent } from '../exercise-variation-popover/exercise-variation-popover.component';

@Component({
  selector: 'app-exercise-variation',
  templateUrl: './exercise-variation.component.html',
  styleUrls: ['./exercise-variation.component.scss'],
})
export class ExerciseVariationComponent implements OnInit {

  @Input() exerciseSet: ExerciseSet;
  @Input() inEditMode: boolean;

  get InEditMode(): boolean {
      return this.inEditMode;
  }

  constructor(private popoverCtrl: PopoverController) {
  }

  ngOnInit() {
    if (!this.exerciseSet.theGrip) {
      this.exerciseSet.theGrip = new Grip();
    }
    if (!this.exerciseSet.typeOfWeight) {
      this.exerciseSet.typeOfWeight = WeightType.NoWeight;
    }
    this.exerciseSet.theGrip.typeOfGrip = GripType[this.exerciseSet.theGrip.typeOfGrip] || GripType.NoGrip;
    this.exerciseSet.theGrip.width = GripWidth[this.exerciseSet.theGrip.width] || GripWidth.NoGrip;
    this.exerciseSet.typeOfWeight = WeightType[this.exerciseSet.typeOfWeight] || WeightType.NoWeight;
    this.exerciseSet.repSpeed = RepetitionSpeed[this.exerciseSet.repSpeed] || RepetitionSpeed.NA;
  }

  getWeightVariation = (): string => {
    if (this.exerciseSet.typeOfWeight !== WeightType.NoWeight) {
      return `${this.exerciseSet.typeOfWeight}`;
    }
  }
  getSpeedVariation = (): string => {
    if (this.exerciseSet.repSpeed !== RepetitionSpeed.NA) {
      return `${this.exerciseSet.repSpeed}`;
    }
  }
  getGripVariation = (): string => {
    let rc = '';
    let hasWidth = false;
    if (this.exerciseSet.theGrip.width !== GripWidth.NoGrip) {
      rc = `Grip: ${this.exerciseSet.theGrip.width}`;
      hasWidth = true;
    }
    if (this.exerciseSet.theGrip.typeOfGrip !== GripType.NoGrip) {
      if (!hasWidth) {
        rc += `Grip: ${this.exerciseSet.theGrip.typeOfGrip}`;
      } else {
        rc += `, ${this.exerciseSet.theGrip.typeOfGrip}`;
      }
    }

    return rc;
  }

  get exerciseDetails(): string {
    const details = [];
    let rc: string;

    rc = this.getWeightVariation();
    if (rc) { details.push(rc); }
    rc = this.getGripVariation();
    if (rc) { details.push(rc); }
    rc = this.getSpeedVariation();
    if (rc) { details.push(rc); }

    return details.length ? details.join(' | ') : '...';
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: ExerciseVariationPopoverComponent,
      event: event,
      componentProps: { exerciseSet: this.exerciseSet }
    });
    popover.present();
  }


}
