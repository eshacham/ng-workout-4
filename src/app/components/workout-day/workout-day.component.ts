import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonFab } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { WorkoutDayBean } from '../../models/WorkoutDay';
import { DisplayMode, RunningState } from '../../models/enums';
import { IAppState } from 'src/app/store/state/app.state';
import {
  StartFirstExercise,
  ChangeDisplayMode,
  StartNextExercise,
  DeleteWorkoutDay,
  AddWorkoutDay,
  MoveWorkoutDay,
  Direction,
  UpdateWorkoutDay,
  ReorderExerciseSets
} from 'src/app/store/actions/workoutDays.actions';
import {
  SelectWorkoutDayState,
  // SelectExerciseSetIndex2Delete,
  selectWorkoutDay
} from 'src/app/store/selectors/workoutDays.selectors';
import { takeUntil } from 'rxjs/operators';
import { UpdateWorkouts } from 'src/app/store/actions/data.actions';

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
  private exerciseSets: string[];
  private name: string;

  @ViewChild('fabWorkout') fabWorkout: IonFab;
  @ViewChild('fabEdit') fabEdit: IonFab;

  @Input() workoutDayId: string;
  @Input() isLastDayActive: boolean;
  @Input() isFirstDayActive: boolean;
  @Input() isOneDayOnly: boolean;
  @Input() isNewDayAdded: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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
    console.log(`workout-day ${this.workoutDayId} ngOnInit - this.isNewDayAdded ${this.isNewDayAdded}`);
    if (this.isNewDayAdded) {
      this.fabEdit.activated = true;
      this.DisplayMode = DisplayMode.Edit;
    }
    this.store.select(selectWorkoutDay(this.workoutDayId))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(workoutDay => {
        if (workoutDay) {
          console.log(`workout-day ${this.workoutDayId} selectWorkoutDay`, workoutDay);
          this.exerciseSets = workoutDay.exerciseSets;
          this.name = workoutDay.name;
        }
      });
    this.store.select(SelectWorkoutDayState)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(state => {
        // if (state && isNaN(state.exerciseSetIndex2Delete)) {
        if (state) {
          this.handleWorkoutDayStateChange(state);
        }
      });
    // this.store.select(SelectExerciseSetIndex2Delete)
    //   .pipe(takeUntil(this.ngUnsubscribe))
    //   .subscribe(index => {
    //     if (index || index === 0) {
    //       this.deleteExerciseSet(index);
    //     }
    //   });
  }

  ngOnDestroy() {
    console.log(`workout-day ${this.workoutDayId} onDestroy`);
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  handleWorkoutDayStateChange(state: WorkoutDayBean) {
    switch (state.runningState) {
      case RunningState.Completed:
        if (state.id === this.workoutDayId) {
          if (state.runningExerciseSetIndex + 1 < this.exerciseSets.length) {
            this.store.dispatch(new StartNextExercise({
              id: state.id,
              runningExerciseSetIndex: state.runningExerciseSetIndex + 1,
              displayMode: DisplayMode.Workout,
              runningState: RunningState.Starting,
              exerciseSets: null,
              name: null
            }));
          } else {
            this.stopWorkout();
          }
        }
        break;
      case RunningState.Started:
        if (state.id !== this.workoutDayId) {
          this.stopWorkout();
        }
        break;
      default:
    }

    if (state.runningState === RunningState.Started) {

    }
  }

  DispatchChangeDisplayMode() {
    this.store.dispatch(new ChangeDisplayMode({
      id: this.workoutDayId,
      runningExerciseSetIndex: null,
      displayMode: this.DisplayMode,
      runningState: RunningState.NA,
      exerciseSets: null,
      name: null
    }));
  }

  startWorkoutToggler() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Workout;
        this.store.dispatch(new StartFirstExercise({
          id: this.workoutDayId,
          runningExerciseSetIndex: 0,
          displayMode: DisplayMode.Workout,
          runningState: RunningState.Starting,
          exerciseSets: null,
          name: null
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

  async selectExerciseToAdd(event) {
    this.router.navigate(['select-exercise'], { relativeTo: this.route });
    event.stopPropagation();
  }

  moveForwardWorkoutDay(event) {
    this.store.dispatch(new MoveWorkoutDay({ direction: Direction.Forward }));
    event.stopPropagation();
  }

  moveBackWorkoutDay(event) {
    this.store.dispatch(new MoveWorkoutDay({ direction: Direction.Backword }));
    event.stopPropagation();
  }

  addWorkoutDay(event) {
    this.store.dispatch(new AddWorkoutDay({
      dayId: this.workoutDayId
    }));
    event.stopPropagation();
  }

  deleteWorkoutDay(event) {
    this.store.dispatch(new DeleteWorkoutDay({
      dayId: this.workoutDayId,
      sets: this.exerciseSets
    }));
    event.stopPropagation();
  }

  workoutDayChanged() {
    this.store.dispatch(new UpdateWorkoutDay({
      dayId: this.workoutDayId ,
      name: this.name }));
  }

  async saveChanges() {
    this.store.dispatch(new UpdateWorkouts());
    // this.toastr.info('Saved!');
  }

  reorderItems(event: CustomEvent<ItemReorderEventDetail>) {
    const from = event.detail.from;
    const to = event.detail.to;
    console.log(`Moving item from ${from} to ${to}`);
    this.store.dispatch(new ReorderExerciseSets({
      dayId: this.workoutDayId,
      fromIndex: from < to ? from : to,
      toIndex: to > from ? to : from
    }));
    event.detail.complete(true);
  }
}
