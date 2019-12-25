import { Component, OnInit } from '@angular/core';
import { WorkoutBean } from 'src/app/models/Workout';
import { NavParams } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { ImportWorkout } from 'src/app/store/actions/workouts.actions';

@Component({
  selector: 'app-workout-selection-popover',
  templateUrl: './workout-selection-popover.component.html',
  styleUrls: ['./workout-selection-popover.component.scss'],
})
export class WorkoutSelectionPopoverComponent implements OnInit {

  constructor(private navParams: NavParams,
    private store: Store<IAppState>) { }
  workouts: WorkoutBean[];
  selectedWorkout: string;

  ngOnInit() {
    this.workouts = this.navParams.data['workouts'];
  }

  importWorkout() {
    this.store.dispatch(new ImportWorkout({workoutId: this.selectedWorkout}));
  }
}
