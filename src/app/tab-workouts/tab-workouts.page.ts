import { Component, OnInit } from '@angular/core';
import { DefaultWorkouts } from './../models/DefaultWorkouts';
import { Storage } from '@ionic/storage';
import { json } from '../constants/defaultWorkouts';
import { deserialize } from 'json-typescript-mapper';
import { Workout } from '../models/Workout';

const STORAGE_KEY = 'my_workouts';

@Component({
  selector: 'app-tab-workouts',
  templateUrl: 'tab-workouts.page.html',
  styleUrls: ['tab-workouts.page.scss']
})
export class TabWorkoutsPage implements OnInit {
  workouts: Workout[];

  constructor(
    private storage: Storage) {}

  async ngOnInit () {
    await this.initStorage();
  }

  private async initStorage() {
    await this.storage.ready();
    this.workouts = await this.storage.get(STORAGE_KEY);
    if (!this.workouts || !this.workouts.length) {
      let defaultWorkouts: DefaultWorkouts;
      defaultWorkouts = deserialize(DefaultWorkouts, json);
      await this.storage.set(STORAGE_KEY, defaultWorkouts.workouts);
      this.workouts = defaultWorkouts.workouts;
    }
  }

}
