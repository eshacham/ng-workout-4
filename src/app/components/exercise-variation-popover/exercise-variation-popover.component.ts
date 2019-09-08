import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { GripType, WeightType, GripWidth, RepetitionSpeed } from 'src/app/models/enums';
import { ExerciseBean } from 'src/app/models/Exercise';

@Component({
  selector: 'app-exercise-variation-popover',
  templateUrl: './exercise-variation-popover.component.html',
  styleUrls: ['./exercise-variation-popover.component.scss'],
})
export class ExerciseVariationPopoverComponent implements OnInit {

  exercise: ExerciseBean;

  weightTypes: string[];
  gripTypes: string[];
  gripWidths: string[];
  repSpeeds: string[];

  constructor(private navParams: NavParams) {
  }

  ngOnInit() {
    this.exercise = this.navParams.data.exercise;

    this.gripTypes = Object.keys(GripType).map(key => GripType[key]);
    this.weightTypes = Object.keys(WeightType).map(key => WeightType[key]);
    this.gripWidths = Object.keys(GripWidth).map(key => GripWidth[key]);
    this.repSpeeds = Object.keys(RepetitionSpeed).map(key => RepetitionSpeed[key]);
  }

}
