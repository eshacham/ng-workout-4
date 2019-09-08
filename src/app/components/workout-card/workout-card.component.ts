import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { WorkoutBean } from '../../models/Workout';
import { DisplayMode } from 'src/app/models/enums';
import { IAppState } from 'src/app/store/state/app.state';
import { DeleteWorkout } from 'src/app/store/actions/workouts.actions';
import { UpdateWorkouts } from 'src/app/store/actions/data.actions';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent implements OnInit, OnDestroy {

  @Input() workout: WorkoutBean;
  @Input() displayMode: DisplayMode;

  constructor(
    private router: Router, private route: ActivatedRoute,
    private store: Store<IAppState>) {
  }

  ngOnInit() {
    console.log('workout-card ngOnInit -> ', DisplayMode[this.displayMode]);
    console.log('workout-card workout -> ', this.workout);
  }

  ngOnDestroy() {
    console.log('onDestroy - workout-card');
  }

  get IsEditMode() { return this.displayMode === DisplayMode.Edit; }
  get IsDisplayMode() { return this.displayMode === DisplayMode.Display; }

  async goToWorkoutDays() {
    const id = this.workout.id;
    console.log('going to workout with id', JSON.stringify(id));
    this.router.navigate([`workout-days/${id}`], { relativeTo: this.route });
  }

  get daysCount(): number {
    return (this.workout.days) ? this.workout.days.length : 0;
  }

  deleteWorkout() {
    this.store.dispatch(new DeleteWorkout({
      workoutId: this.workout.id.toString()
    }));
    this.store.dispatch(new UpdateWorkouts());
  }

}
