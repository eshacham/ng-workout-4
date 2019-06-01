import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workout } from '../../models/Workout';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ExerciseSetSwitchModeEvent } from 'src/app/models/ExerciseSwitchModeEvent';
import { DisplayMode } from 'src/app/models/enums';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent implements OnInit {

  @Input() workout: Workout;
  @Input() inWorkoutPublisher: Subject<ExerciseSetSwitchModeEvent>;

  displayMode = DisplayMode;
  private _displayMode: DisplayMode = DisplayMode.Display;

  constructor(
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.inWorkoutPublisher.subscribe(event => this.handleWorkoutEventchange(event));
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
    console.log('workout-card: receieved Switch Mode Event: ', JSON.stringify(event));
  }

  goToWorkoutDays() {
    this.router.navigate([`workout-days/${this.workout.id}`], { relativeTo: this.route });
  }

  get daysCount(): number {
    return (this.workout.days) ? this.workout.days.length : 0;
  }
}
