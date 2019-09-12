import { Store } from '@ngrx/store';
import { IonFab } from '@ionic/angular';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { WorkoutBean } from '../models/Workout';
import { DisplayMode } from '../models/enums';
import { IAppState } from '../store/state/app.state';
import { AddWorkout } from '../store/actions/workouts.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { GetData, UpdateWorkouts } from '../store/actions/data.actions';
import { selectWorkouts } from '../store/selectors/workouts.selectors';

@Component({
  selector: 'app-tab-workouts',
  templateUrl: 'tab-workouts.page.html',
  styleUrls: ['tab-workouts.page.scss']
})
export class TabWorkoutsPage implements OnInit, OnDestroy {

  @ViewChild('fabEdit') fabEdit: IonFab;

  workouts: WorkoutBean[];

  displayMode = DisplayMode;
  private _displayMode: DisplayMode = DisplayMode.Display;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<IAppState>) {
  }

  async ngOnInit() {
    this.store.dispatch(new GetData());

    this.store.select(selectWorkouts)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(workouts => {
        this.workouts = workouts;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  get DisplayMode(): DisplayMode {
    return this._displayMode;
  }
  set DisplayMode(val: DisplayMode) {
    if (this._displayMode !== val) {
      this._displayMode = val;
      if (this.DisplayMode === DisplayMode.Display) {
        console.log('tab-workouts, set display mode', this.workouts);
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
    event.stopPropagation();
    const data = WorkoutBean.newBean();
    this.store.dispatch(new AddWorkout(data));
    await new Promise(() => setTimeout(() => {
      this.DisplayMode = DisplayMode.Edit;
      this.store.dispatch(new UpdateWorkouts());
    }, 1));
  }

}
