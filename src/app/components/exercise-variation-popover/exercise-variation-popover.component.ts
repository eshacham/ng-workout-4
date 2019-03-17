import { Component, OnInit } from '@angular/core';
import { ExerciseSet } from 'src/app/models/ExerciseSet';
import { NavParams } from '@ionic/angular';
import { GripType, WeightType, GripWidth, RepetitionSpeed } from 'src/app/models/enums';

@Component({
  selector: 'app-exercise-variation-popover',
  templateUrl: './exercise-variation-popover.component.html',
  styleUrls: ['./exercise-variation-popover.component.scss'],
})
export class ExerciseVariationPopoverComponent implements OnInit {

  exerciseSet: ExerciseSet;

  weightTypes: string[];
  gripTypes: string[];
  gripWidths: string[];
  repSpeeds: string[];

  constructor(private navParams: NavParams) {
  }

  ngOnInit() {
    this.exerciseSet = this.navParams.data.exerciseSet;

    this.gripTypes = Object.keys(GripType).map(key => GripType[key]);
    this.weightTypes = Object.keys(WeightType).map(key => WeightType[key]);
    this.gripWidths = Object.keys(GripWidth).map(key => GripWidth[key]);
    this.repSpeeds = Object.keys(RepetitionSpeed).map(key => RepetitionSpeed[key]);
  }

}
