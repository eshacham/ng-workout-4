import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonFab } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { WorkoutDay, WorkoutDayBean } from '../../models/WorkoutDay';
import { ExerciseSet } from '../../models/ExerciseSet';
import { DisplayMode, RunningState } from '../../models/enums';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { IAppState } from 'src/app/store/state/app.state';
import {
  StartFirstExercise,
  ChangeDisplayMode,
  StartNextExercise,
  DeleteWorkoutDay,
  ExerciseSetDeleted,
  AddWorkoutDay,
  MoveWorkoutDay,
  Direction} from 'src/app/store/actions/workoutDays.actions';
import { SelectWorkoutDayState, SelectExerciseSetIndex2Delete, selectWorkoutDay } from 'src/app/store/selectors/workoutDays.selectors';
import { takeUntil, take } from 'rxjs/operators';

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
  private ngUnsubscribeForExerciseSetDeletion: Subject<void> = new Subject<void>();
  private workoutDay: WorkoutDayBean;

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
    console.log('workout-day constructor', this.workoutDayId);
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
    if (this.isNewDayAdded) {
      this.fabEdit.activated = true;
      this.DisplayMode = DisplayMode.Edit;
    }
    this.store.select(selectWorkoutDay(this.workoutDayId))
      .pipe(take(1))
      .subscribe(workoutDay => {
        console.log('workout-day selectWorkoutDay', workoutDay);
        this.workoutDay = workoutDay;
      });
    this.store.select(SelectWorkoutDayState)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(state => {
        if (state && isNaN(state.exerciseSetIndex2Delete)) {
          this.handleWorkoutDayStateChange(state);
        }
      });
    this.store.select(SelectExerciseSetIndex2Delete)
      .pipe(takeUntil(this.ngUnsubscribeForExerciseSetDeletion))
      .subscribe(index => {
        if (index || index === 0) {
          this.deleteExerciseSet(index);
        }
      });
  }

  ngOnDestroy() {
    console.log('onDestroy - workout-day');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.ngUnsubscribeForExerciseSetDeletion.next();
    this.ngUnsubscribeForExerciseSetDeletion.complete();
  }

  handleWorkoutDayStateChange(state: WorkoutDayBean) {
    switch (state.runningState) {
      case RunningState.Completed:
        if (state.id === this.workoutDay.id) {
          if (state.runningExerciseSetIndex + 1 < this.workoutDay.exerciseSets.length) {
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
        if (state.id !== this.workoutDay.id) {
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
      id: this.workoutDay.id,
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
          id: this.workoutDay.id,
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

  async deleteExerciseSet(exerciseSetIndex: number) {
    // ExerciseSet.delete(this.workoutDay.exerciseSets, exerciseSetIndex);
    // await this.saveChanges();
    // this.store.dispatch(new ExerciseSetDeleted({
    //   workoutDayId: this.workoutDay.id.toString()
    // }));
  }

  async addExercise(event) {
    this.router.navigate(['select-exercise'], { relativeTo: this.route });
    event.stopPropagation();
  }

  moveForwardWorkoutDay(event) {
    this.store.dispatch(new MoveWorkoutDay({direction: Direction.Forward}));
    event.stopPropagation();
  }

  moveBackWorkoutDay(event) {
    this.store.dispatch(new MoveWorkoutDay({direction: Direction.Backword}));
    event.stopPropagation();
  }

  addWorkoutDay(event) {
    this.store.dispatch(new AddWorkoutDay({
      workoutDayId: this.workoutDay.id.toString()
    }));
    event.stopPropagation();
  }

  deleteWorkoutDay(event) {
    this.store.dispatch(new DeleteWorkoutDay({
      workoutDayId: this.workoutDay.id.toString()
    }));
    event.stopPropagation();
  }

  async saveChanges() {
    // await this.dataService.saveWorkouts();
    // this.toastr.info('Saved!');
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
