import { take } from 'rxjs/operators';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { WorkoutBean } from '../../models/Workout';
import { DisplayMode } from 'src/app/models/enums';
import { IAppState } from 'src/app/store/state/app.state';
import { DeleteWorkout, UpdateWorkout, SelectWorkout } from 'src/app/store/actions/workouts.actions';
import { UpdateWorkouts, UpdateImages } from 'src/app/store/actions/data.actions';
import { selectWorkout } from 'src/app/store/selectors/workouts.selectors';
import { selectMediaIdsByWorkout } from 'src/app/store/selectors/exercises.selectors';
import { UpdateBulkExerciseMedia } from 'src/app/store/actions/exercisesMedia.actions';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent implements OnInit, OnDestroy {

  @Input() workoutId: string;
  @Input() displayMode: DisplayMode;

  private _workout: WorkoutBean;
  private name: string;
  private description: string;

  constructor(
    private router: Router, private route: ActivatedRoute,
    private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.store.select(selectWorkout(this.workoutId))
      .pipe(take(1))
      .subscribe(workout => {
        if (workout) {
          this._workout = workout;
          this.name = this._workout.name;
          this.description = this._workout.description;
          console.log('workout-card selectWorkout-> ', this._workout);
        }
      });
  }

  ngOnDestroy() {
    console.log('onDestroy - workout-card', this._workout);
  }

  get IsEditMode() { return this.displayMode === DisplayMode.Edit; }
  get IsDisplayMode() { return this.displayMode === DisplayMode.Display; }

  async goToWorkoutDays() {
    const id = this.workoutId;
    console.log('going to workout with id', JSON.stringify(id));
    this.store.dispatch(new SelectWorkout({ workoutId: id }));
    this.router.navigate([`workout-days/${id}`], { relativeTo: this.route });
  }

  get daysCount(): number {
    return (this._workout.days) ? this._workout.days.length : 0;
  }

  deleteWorkout() {
    this.store.select(selectMediaIdsByWorkout(this.workoutId))
      .pipe(take(1))
      .subscribe(mediaIds => {
        if (mediaIds.length) {
          this.decreseMediasUsage(mediaIds);
        }
        this.store.dispatch(new DeleteWorkout({
          id: this.workoutId,
          days: this._workout.days
        }));
        this.store.dispatch(new UpdateWorkouts());
      });
  }

  decreseMediasUsage(mediaIds) {
    this.store.dispatch(new UpdateBulkExerciseMedia({
      ids: mediaIds,
      mediaUsageCounterInc: -1
    }));
    this.store.dispatch(new UpdateImages());
  }

  workoutChanged() {
    const workout = { ...this._workout };
    workout.name = this.name;
    workout.description = this.description;
    this.store.dispatch(new UpdateWorkout({ workout: workout }));
  }

}
