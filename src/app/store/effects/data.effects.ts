import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import {
    GetData,
    EDataActions,
    GetDataSuccess,
    UpdateWorkouts,
    WorkoutsUpdated } from '../actions/data.actions';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { WorkoutsDataMaps } from 'src/app/models/DefaultWorkouts';
import { selectWorkoutsData } from '../selectors/data.selectors';

@Injectable()
export class WorkoutsEffects {
    @Effect()
    getWorkouts$ = this._actions$.pipe(
        ofType<GetData>(EDataActions.GetData),
        switchMap(async () => await this._dataService.getWorkouts()),
        switchMap((workoutsData: WorkoutsDataMaps) => {
            return of(new GetDataSuccess(workoutsData));
        })
    );
    @Effect()
    saveWorkouts$ = this._actions$.pipe(
        ofType<UpdateWorkouts>(EDataActions.UpdateWorkouts),
        map(action => action),
        withLatestFrom(this._store.pipe(select(selectWorkoutsData))),
        switchMap(([action, workoutsData]) => {
            this._dataService.saveWorkouts(workoutsData);
            return of(new WorkoutsUpdated());
        })
    );

constructor(
    private _dataService: DataServiceProvider,
    private _actions$: Actions,
    private _store: Store<IAppState>
) {}
}
