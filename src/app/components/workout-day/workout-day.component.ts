import { Subject } from 'rxjs';
import { Component, Input, Output, EventEmitter, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonFab } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { WorkoutDay } from '../../models/WorkoutDay';
import { ExerciseSet } from '../../models/ExerciseSet';
import { DisplayMode, ExerciseSetAction, RunningState } from '../../models/enums';
import { ExerciseSetActionEvent } from '../../models/ExerciseActionEvent';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { StartFirstExercise, ChangeDisplayMode, StartNextExercise, DeleteWorkoutDay } from 'src/app/store/actions/workouts.actions';
import { SelectWorkoutDayState } from 'src/app/store/selectors/workouts.selectors';
import { takeUntil } from 'rxjs/operators';
import { IWorkoutDayState } from 'src/app/store/state/workouts.state';

@Component({
  selector: 'app-workout-day',
  templateUrl: './workout-day.component.html',
  styleUrls: ['./workout-day.component.scss'],
})
export class WorkoutDayComponent implements OnInit, OnDestroy {

  runningExerciseSetIndex?: number;
  displayMode = DisplayMode;
  private _displayMode: DisplayMode = DisplayMode.Display;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @ViewChild('fabWorkout') fabWorkout: IonFab;
  @ViewChild('fabEdit') fabEdit: IonFab;

  @Input() workoutDay: WorkoutDay;
  @Input() isLastDayActive: boolean;
  @Input() isFirstDayActive: boolean;
  @Input() isOneDayOnly: boolean;
  @Input() isNewDayAdded: boolean;
  @Output() outEventEmitter = new EventEmitter<ExerciseSetActionEvent>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider,
    private store: Store<IAppState>) {
    this.runningExerciseSetIndex = null;
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
  get IsWorkoutMode() { return this._displayMode === DisplayMode.Workout; }
  get IsDisplayOrWorkout() { return this.IsWorkoutMode || this.IsDisplayMode; }
  get IsDisplayOrEdit() { return this.IsEditMode || this.IsDisplayMode; }

  ngOnInit() {
    console.log('workout-day ngOnInit - this.isNewDayAdded', this.isNewDayAdded);
    // TODO new login with redux state
    if (this.isNewDayAdded) {
      this.fabEdit.activated = true;
      this.DisplayMode = DisplayMode.Edit;
    }
    this.store.select(SelectWorkoutDayState)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(state => {
        if (state) {
          this.handleWorkoutDayStateChange(state);
        }
      });
  }

  ngOnDestroy() {
    console.log('onDestroy - workout-day');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  handleWorkoutDayStateChange(state: IWorkoutDayState) {
    switch (state.runningState) {
      case RunningState.Completed:
        if (state.workoutDayId === this.workoutDay.id) {
          if (state.runningExerciseSetIndex + 1 < this.workoutDay.exerciseSets.length) {
            this.store.dispatch(new StartNextExercise({
              workoutDayId: this.workoutDay.id,
              runningExerciseSetIndex: state.runningExerciseSetIndex + 1,
              displayMode: DisplayMode.Workout,
              runningState: RunningState.Starting
            }));
          } else {
            this.stopWorkout();
          }
        }
        break;
      case RunningState.Started:
        if (state.workoutDayId !== this.workoutDay.id) {
          this.stopWorkout();
        }
        break;
      default:
    }

    if (state.runningState === RunningState.Started) {

    }
  }


  async handleExerciseSetActionEvent(event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;
    switch (exerciseSetAction) {
      case ExerciseSetAction.Delete:
        console.log('workout-day: receieved delete event: ', JSON.stringify(event));
        await this.deleteExerciseSet(event.exerciseSet);
        break;
    }
  }

  DispatchChangeDisplayMode() {
    this.store.dispatch(new ChangeDisplayMode({
      workoutDayId: this.workoutDay.id,
      runningExerciseSetIndex: null,
      displayMode: this.DisplayMode,
      runningState: RunningState.NA
    }));
  }

  startWorkoutToggler() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Workout;
        this.store.dispatch(new StartFirstExercise({
          workoutDayId: this.workoutDay.id,
          runningExerciseSetIndex: 0,
          displayMode: DisplayMode.Workout,
          runningState: RunningState.Starting
        }));
        break;
      case DisplayMode.Workout:
        this.DisplayMode = DisplayMode.Display;
        this.DispatchChangeDisplayMode();
        break;
    }
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
    this.DispatchChangeDisplayMode();
  }
  async editWorkoutToggler() {
    switch (this.DisplayMode) {
      case DisplayMode.Workout:
      case DisplayMode.Display:
        this.DisplayMode = DisplayMode.Edit;
        break;
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Display;
        await this.saveChanges();
        break;
    }
    this.DispatchChangeDisplayMode();
  }

  async deleteExerciseSet(set: ExerciseSet) {
    const index = this.workoutDay.exerciseSets.findIndex(s => s === set);
    ExerciseSet.delete(this.workoutDay.exerciseSets, index);
    await this.saveChanges();
  }

  async addExercise(event) {
    this.router.navigate(['select-exercise'], { relativeTo: this.route });
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
    this.store.dispatch(new DeleteWorkoutDay({workoutDayId: this.workoutDay.id}));
    event.stopPropagation();
  }

  async saveChanges() {
    await this.dataService.saveWorkouts();
    // this.toastr.info('Saved!');
  }


  emitExerciseSetActionEvent(action: ExerciseSetAction) {
    this.outEventEmitter.emit(new ExerciseSetActionEvent(
      action,
      null,
      null,
      this.workoutDay.id));
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
