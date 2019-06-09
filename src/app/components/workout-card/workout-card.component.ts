import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workout } from '../../models/Workout';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { ExerciseSetSwitchModeEvent } from 'src/app/models/ExerciseSwitchModeEvent';
import { DisplayMode, ExerciseSetAction } from 'src/app/models/enums';
import { ExerciseSetActionEvent } from 'src/app/models/ExerciseActionEvent';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent implements OnInit {

  @Input() workout: Workout;
  @Input() inWorkoutPublisher: Subject<ExerciseSetSwitchModeEvent>;
  @Output() outEventEmitter = new EventEmitter<ExerciseSetActionEvent>();

  displayMode = DisplayMode;
  private _displayMode: DisplayMode = DisplayMode.Display;
  private subs: Subscription;

  constructor(
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('workout-card ngOnInit -> ', this);
    this.subs = this.inWorkoutPublisher.subscribe(event => this.handleWorkoutEventchange(event));
  }

  get DisplayMode(): DisplayMode {
    return this._displayMode;
  }
  set DisplayMode(val: DisplayMode) {
    if (this._displayMode !== val) {
      this._displayMode = val;
    }
  }
  get IsEditMode() { return this._displayMode === DisplayMode.Edit; }
  get IsDisplayMode() { return this._displayMode === DisplayMode.Display; }

  handleWorkoutEventchange(event: ExerciseSetSwitchModeEvent): void {
    this.DisplayMode = event.displayMode;
    console.log(`workout-card: receieved ${DisplayMode[event.displayMode]} Event`);
  }

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

// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.subs.unsubscribe();
    console.log('workout-card ngOnDestroy: unsubscribing from inWorkoutPublisher');
  }
}
