import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/core';
import { WorkoutDayBean } from '../../models/WorkoutDay';
import { DisplayMode, RunningState } from '../../models/enums';
import { IAppState } from 'src/app/store/state/app.state';
import {
  StartNextExercise,
  UpdateWorkoutDay,
  ReorderExerciseSets
} from 'src/app/store/actions/workoutDays.actions';
import { getWorkoutDay } from 'src/app/store/selectors/workoutDays.selectors';
import { takeUntil } from 'rxjs/operators';
import { UpdateWorkouts, UpdateImages } from 'src/app/store/actions/data.actions';
import { UpdateExerciseMediaUsage } from 'src/app/store/actions/exercisesMedia.actions';

@Component({
  selector: 'app-workout-day',
  templateUrl: './workout-day.component.html',
  styleUrls: ['./workout-day.component.scss'],
})
export class WorkoutDayComponent implements OnInit, OnDestroy {

  runningExerciseSetIndex?: number;
  displayMode = DisplayMode;

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private exerciseSets: string[];
  private name: string;

  @Input() dayId: string;
  @Input() isLastDayActive: boolean;
  @Input() isFirstDayActive: boolean;
  @Input() isOneDayOnly: boolean;

  constructor(
    private store: Store<IAppState>) {
    this.runningExerciseSetIndex = null;
  }

  private _displayMode: DisplayMode = DisplayMode.Display;
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

  ngOnInit() {
    this.store.select(getWorkoutDay(this.dayId))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(workoutDay => {
        if (workoutDay) {
          console.log(`workout-day ${this.dayId} getWorkoutDay`, workoutDay);
          this.exerciseSets = workoutDay.exerciseSets;
          this.name = workoutDay.name;
          this.handleSelectedWorkoutDayStateChange(workoutDay);
        }
      });
  }

  decreseMediasUsage(mediaIds) {
    this.store.dispatch(new UpdateExerciseMediaUsage({
      ids: mediaIds,
      mediaUsageCounterInc: -1
    }));
    this.store.dispatch(new UpdateImages());
  }

  ngOnDestroy() {
    console.log(`workout-day ${this.dayId} onDestroy`);
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  handleSelectedWorkoutDayStateChange(state: WorkoutDayBean) {
    switch (state.runningState) {
      case RunningState.Completed:
        if (state.id === this.dayId) {
          if (state.runningExerciseSetIndex + 1 < this.exerciseSets.length) {
            this.store.dispatch(new StartNextExercise({
              id: state.id,
              runningExerciseSetIndex: state.runningExerciseSetIndex + 1,
              displayMode: DisplayMode.Workout,
              runningState: RunningState.Starting,
              exerciseSets: null,
              name: null,
            }));
          } else {
            // this.stopWorkout();
          }
        }
        break;
      case RunningState.Started:
        if (state.id !== this.dayId) {
          // this.stopWorkout();
        }
        break;
      default:
    }
  }

  workoutDayChanged() {
    this.store.dispatch(new UpdateWorkoutDay({
      dayId: this.dayId,
      name: this.name
    }));
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
      dayId: this.dayId,
      fromIndex: from < to ? from : to,
      toIndex: to > from ? to : from
    }));
    event.detail.complete(true);
  }
}
