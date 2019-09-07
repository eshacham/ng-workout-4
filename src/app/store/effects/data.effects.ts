import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import { GetWorkouts, EDataActions, GetWorkoutsSuccess } from '../actions/data.actions';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { WorkoutsDataMaps } from 'src/app/models/DefaultWorkouts';

@Injectable()
export class WorkoutsEffects {
    @Effect()
    getWorkouts$ = this._actions$.pipe(
        ofType<GetWorkouts>(EDataActions.GetWorkouts),
        switchMap(async () => await this._dataService.getWorkouts()),
        switchMap((workoutsData: WorkoutsDataMaps) => {
            return of(new GetWorkoutsSuccess(workoutsData));
        })
    );

constructor(
    private _dataService: DataServiceProvider,
    private _actions$: Actions,
    private _store: Store<IAppState>
) {}
}
