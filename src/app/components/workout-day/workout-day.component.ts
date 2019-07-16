import { Subject, Subscription } from 'rxjs';
import { Component, Input, Output, EventEmitter, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonFab } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { WorkoutDay } from '../../models/WorkoutDay';
import { ExerciseSet } from '../../models/ExerciseSet';
import { DisplayMode, ExerciseSetAction } from '../../models/enums';
import { ExerciseSetSwitchModeEvent } from '../../models/ExerciseSwitchModeEvent';
import { ExerciseSetActionEvent } from '../../models/ExerciseActionEvent';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'app-workout-day',
  templateUrl: './workout-day.component.html',
  styleUrls: ['./workout-day.component.scss'],
})
export class WorkoutDayComponent implements OnInit, OnDestroy {

  workoutDayPublisher: Subject<ExerciseSetSwitchModeEvent>;
  runningExerciseIndex: number;
  displayMode = DisplayMode;
  private _displayMode: DisplayMode = DisplayMode.Display;
  private subs: Subscription;

  @ViewChild('fabWorkout') fabWorkout: IonFab;
  @ViewChild('fabEdit') fabEdit: IonFab;

  @Input() workoutDay: WorkoutDay;
  @Input() isLastDayActive: boolean;
  @Input() isFirstDayActive: boolean;
  @Input() isOneDayOnly: boolean;
  @Input() isNewDayAdded: boolean;
  @Input() inWorkoutDaysPublisher: Subject<ExerciseSetSwitchModeEvent>;
  @Output() outEventEmitter = new EventEmitter<ExerciseSetActionEvent>();

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider) {
      this.workoutDayPublisher = new Subject();
      this.runningExerciseIndex = 0;
  }

  get DisplayMode(): DisplayMode {
    return this._displayMode;
  }

  set DisplayMode(val: DisplayMode) {
    if (this._displayMode !== val) {
      this._displayMode = val;
      if (this._displayMode === DisplayMode.Workout) {
        if (this.runningExerciseIndex === 0) {
          this.runningExerciseIndex = 1;
        }
      }
      this.publishWorkoutEvent(this._displayMode, this.runningExerciseIndex);
    }
  }

  get IsEditMode() { return this._displayMode === DisplayMode.Edit; }
  get IsDisplayMode() { return this._displayMode === DisplayMode.Display; }
  get IsWorkoutMode() { return this._displayMode === DisplayMode.Workout; }
  get IsDisplayOrWorkout() { return this.IsWorkoutMode || this.IsDisplayMode; }
  get IsDisplayOrEdit() { return this.IsEditMode || this.IsDisplayMode; }

  ngOnInit() {
    this.subs = this.inWorkoutDaysPublisher.subscribe(event => this.handleWorkoutEventchange(event));
    console.log('workout-day ngOnInit - this.isNewDayAdded', this.isNewDayAdded);
    if (this.isNewDayAdded) {
      this.fabEdit.activated = true;
      this.DisplayMode = DisplayMode.Edit;
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  handleWorkoutEventchange(event: ExerciseSetSwitchModeEvent) {
    console.log('workout day handleWorkoutEventchange', event, this.workoutDay.name);
    if (event.runningExerciseSetDayName !== this.workoutDay.name) {
      this.finishWorkout(false);
    } else {
      if (event.displayMode === DisplayMode.Edit) {
        this.publishWorkoutEvent(DisplayMode.Edit, null);
      }
    }
  }

  async handleExerciseSetActionEvent(event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;
    switch (exerciseSetAction) {
      case ExerciseSetAction.Completed:
        console.log('workout-day: receieved completed event: ', JSON.stringify(event));
        this.handleExerciseSetCompletion(event.exerciseSetIndex);
        break;
      case ExerciseSetAction.Delete:
        console.log('workout-day: receieved delete event: ', JSON.stringify(event));
        await this.deleteExerciseSet(event.exerciseSet);
        break;
      case ExerciseSetAction.Edit:
        console.log('workout-day: receieved edit event: ', JSON.stringify(event));
        break;
      case ExerciseSetAction.Run:
        console.log('workout-day: receieved run event: ', JSON.stringify(event));
        this.startExerciseSet(event.exerciseSetIndex);
        break;
    }
  }

  startWorkout() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
        this.DisplayMode = DisplayMode.Workout;
        break;
      case DisplayMode.Workout:
        this.DisplayMode = DisplayMode.Display;
        break;
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Workout;
        break;
    }
    this.emitExerciseActionEventByStatus();
  }
  stopWorkout() {
    switch (this.DisplayMode) {
      case DisplayMode.Workout:
        this.DisplayMode = DisplayMode.Display;
        break;
      case DisplayMode.Display:
      case DisplayMode.Edit:
        break;
    }
    this.emitExerciseActionEventByStatus();
  }
  async editWorkout() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
        this.DisplayMode = DisplayMode.Edit;
        break;
      case DisplayMode.Workout:
        this.DisplayMode = DisplayMode.Edit;
        break;
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Display;
        await this.saveChanges();
        break;
    }
    this.emitExerciseActionEventByStatus();
  }
  cancelEditWorkout() {
    switch (this.DisplayMode) {
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Display;
        break;
      case DisplayMode.Display:
      case DisplayMode.Workout:
        break;
    }
    this.emitExerciseActionEventByStatus();
  }

  emitExerciseActionEventByStatus() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
        this.emitExerciseSetActionEvent(ExerciseSetAction.Completed);
        break;
      case DisplayMode.Workout:
        this.fabEdit.close();
        this.emitExerciseSetActionEvent(ExerciseSetAction.Run);
        break;
      case DisplayMode.Edit:
        this.fabWorkout.close();
        this.emitExerciseSetActionEvent(ExerciseSetAction.Edit);
    }
  }

  async deleteExerciseSet(set: ExerciseSet) {
    const index = this.workoutDay.exerciseSets.findIndex(s => s === set);
    ExerciseSet.delete(this.workoutDay.exerciseSets, index);
    await this.saveChanges();
    this.emitExerciseSetActionEvent(ExerciseSetAction.Delete);
  }

  async addExercise(event) {
    this.router.navigate(['select-exercise'], {relativeTo: this.route});
    event.stopPropagation();
  }

  moveForwardWorkoutDay(event) {
    this.emitExerciseSetActionEvent(ExerciseSetAction.MoveDayForward);
    event.stopPropagation();
  }
  moveBackWorkoutDay(event) {
    this.emitExerciseSetActionEvent(ExerciseSetAction.MoveDayBack);
    event.stopPropagation();
  }
  addWorkoutDay(event) {
    this.emitExerciseSetActionEvent(ExerciseSetAction.AddDay);
    event.stopPropagation();
  }
  deleteWorkoutDay(event) {
    this.emitExerciseSetActionEvent(ExerciseSetAction.DeleteDay);
    event.stopPropagation();
  }

  async saveChanges() {
    // console.log(this.workoutDay)
    await this.dataService.saveWorkouts();
    // this.toastr.info('Saved!');
  }

  finishWorkout(notify: boolean = true) {
    this.stopWorkout();
    if (notify) {
      // this.toastr.success('Good Job!');
    }
  }

  handleExerciseSetCompletion(exerciseSetIndex: number) {
    if (this.workoutDay.exerciseSets.length > exerciseSetIndex) {
      this.startExerciseSet(exerciseSetIndex + 1);
    } else {
      this.finishWorkout();
    }
  }

  startExerciseSet(exerciseSetIndex: number) {
    this.publishWorkoutEvent(DisplayMode.Workout, exerciseSetIndex);
  }

  publishWorkoutEvent(
    displayMode: DisplayMode,
    runningExerciseIndex: number) {
    const workoutEvent =
      new ExerciseSetSwitchModeEvent(displayMode, runningExerciseIndex, this.workoutDay.name);
    this.workoutDayPublisher.next(workoutEvent);
  }

  emitExerciseSetActionEvent(action: ExerciseSetAction) {
    this.outEventEmitter.emit(new ExerciseSetActionEvent(
      action,
      null,
      null,
      this.workoutDay.name));
  }

  reorderItems(event: CustomEvent<ItemReorderEventDetail>) {
    const from = event.detail.from;
    const to = event.detail.to;
    console.log(`Moving item from ${from} to ${to}`);
    const set = this.workoutDay.exerciseSets[from];
    this.workoutDay.exerciseSets.splice(from, 1);
    this.workoutDay.exerciseSets.splice(to, 0, set);
    event.detail.complete(true);
  }
}
