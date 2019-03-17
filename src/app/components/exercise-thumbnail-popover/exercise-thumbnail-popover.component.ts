import { Component, OnInit } from '@angular/core';
import { Rep } from 'src/app/models/Rep';
import { NavParams } from '@ionic/angular';
import { WeightUnit } from 'src/app/models/enums';

@Component({
  selector: 'app-exercise-thumbnail-popover',
  templateUrl: './exercise-thumbnail-popover.component.html',
  styleUrls: ['./exercise-thumbnail-popover.component.scss'],
})
export class ExerciseThumbnailPopoverComponent implements OnInit {
  rep: Rep;
  weightUnits: string[];

  constructor(private navParams: NavParams) {
  }

  ngOnInit() {
    this.rep = this.navParams.data.rep;

    this.weightUnits = Object.keys(WeightUnit).map(key => WeightUnit[key]);
  }

}
