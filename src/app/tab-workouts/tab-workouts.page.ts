import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/Workout';
import { DataServiceProvider } from '../providers/data-service/data-service';

@Component({
  selector: 'app-tab-workouts',
  templateUrl: 'tab-workouts.page.html',
  styleUrls: ['tab-workouts.page.scss']
})
export class TabWorkoutsPage implements OnInit {
  workouts: Workout[];

  constructor (
    private dataServiceProvider: DataServiceProvider) {}

  async ngOnInit () {
    this.workouts = await this.dataServiceProvider.initWorkouts();
  }

}
