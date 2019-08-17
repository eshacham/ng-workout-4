import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Workout } from '../../models/Workout';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DisplayMode, ExerciseSetAction } from 'src/app/models/enums';
import { ExerciseSetActionEvent } from 'src/app/models/ExerciseActionEvent';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent implements OnInit, OnDestroy {

  @Input() workout: Workout;
  @Input() displayMode: DisplayMode;
  @Output() outEventEmitter = new EventEmitter<ExerciseSetActionEvent>();

  private subs: Subscription;

  constructor(
    private router: Router, private route: ActivatedRoute) {
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
  emitExerciseSetActionEvent(action: ExerciseSetAction) {
    this.outEventEmitter.emit(new ExerciseSetActionEvent(
      action, null, this.workout.id, null));
  }

  deleteWorkout() {
    this.emitExerciseSetActionEvent(ExerciseSetAction.Delete);
  }


}
