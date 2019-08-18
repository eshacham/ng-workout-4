import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Workout } from '../../models/Workout';
import { DisplayMode } from 'src/app/models/enums';
import { IAppState } from 'src/app/store/state/app.state';
import { DeleteWorkout } from 'src/app/store/actions/workouts.actions';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent implements OnInit, OnDestroy {

  @Input() workout: Workout;
  @Input() displayMode: DisplayMode;

  constructor(
    private router: Router, private route: ActivatedRoute,
    private store: Store<IAppState>) {
  }

  ngOnInit() {
    console.log('workout-card ngOnInit -> ', DisplayMode[this.displayMode]);
  }

  ngOnDestroy() {
    console.log('onDestroy - workout-card');
  }

  get IsEditMode() { return this.displayMode === DisplayMode.Edit; }
  get IsDisplayMode() { return this.displayMode === DisplayMode.Display; }

  goToWorkoutDays() {
    this.router.navigate([`workout-days/${this.workout.id}`], { relativeTo: this.route });
  }

  get daysCount(): number {
    return (this.workout.days) ? this.workout.days.length : 0;
  }

  deleteWorkout() {
    this.store.dispatch(new DeleteWorkout({workoutId: this.workout.id}));
  }

}
