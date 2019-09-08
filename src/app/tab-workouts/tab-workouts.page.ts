import { Store, select } from '@ngrx/store';
import { IonFab } from '@ionic/angular';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Workout, WorkoutBean } from '../models/Workout';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { DisplayMode } from '../models/enums';
import { WorkoutDay } from '../models/WorkoutDay';
import { IAppState } from '../store/state/app.state';
import { DeleteWorkout, WorkoutDeleted } from '../store/actions/workouts.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { SelectWorkoutId2Delete } from '../store/selectors/workouts.selectors';
import { Guid } from 'guid-typescript';
import { GetData, UpdateWorkouts } from '../store/actions/data.actions';
import { selectWorkouts } from '../store/selectors/workouts.selectors';

@Component({
  selector: 'app-tab-workouts',
  templateUrl: 'tab-workouts.page.html',
  styleUrls: ['tab-workouts.page.scss']
})
export class TabWorkoutsPage implements OnInit, OnDestroy {

  @ViewChild('fabEdit') fabEdit: IonFab;

  workouts$: Observable<WorkoutBean[]>;

  displayMode = DisplayMode;
  private _displayMode: DisplayMode = DisplayMode.Display;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private dataService: DataServiceProvider,
    private store: Store<IAppState>) {
    this.workouts$ = this.store.pipe(select(selectWorkouts));
  }

  async ngOnInit() {
    this.store.dispatch(new GetData());
    this.store.select(SelectWorkoutId2Delete)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async id => {
        if (id) {
          await this.deleteWorkout(id);
          this.store.dispatch(new WorkoutDeleted());
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  async ionViewWillEnter() {
  }

  get DisplayMode(): DisplayMode {
    return this._displayMode;
  }
  set DisplayMode(val: DisplayMode) {
    if (this._displayMode !== val) {
      this._displayMode = val;
      if (this.DisplayMode === DisplayMode.Display) {
        // this.dataService.saveWorkouts();
        this.store.dispatch(new UpdateWorkouts());
      }
    }
  }

  editWorkouts() {
    switch (this.DisplayMode) {
      case DisplayMode.Display:
        this.DisplayMode = DisplayMode.Edit;
        break;
      case DisplayMode.Edit:
        this.DisplayMode = DisplayMode.Display;
        break;
    }
  }

  async addWorkout(event: any) {
    const newWorkout = new Workout({
      id: Guid.raw(),
      name: 'new workout',
      description: 'describe the workout',
      days: [
        new WorkoutDay({ id: Guid.raw(), name: 'workout day name', exerciseSets: [] })
      ]
    });
    // this.workouts.push(newWorkout);
    event.stopPropagation();
    await new Promise(() => setTimeout(() => {
      this.DisplayMode = DisplayMode.Edit;
      // this.dataService.saveWorkouts();
    }, 1));

  }

  async deleteWorkout(id: string) {
    // if (this.workouts.length > 1) {
    //   const index = this.workouts.findIndex(w => w.id === id);
    //   const workout = this.workouts[index];
    //   if (workout.days.length) {
    //     workout.days.forEach((_day, idx) => {
    //       // WorkoutDay.delete(workout.days, idx);
    //     });
    //   }
      // this.workouts.splice(index, 1);
      // await this.dataService.saveWorkouts();
    // }
  }
}
