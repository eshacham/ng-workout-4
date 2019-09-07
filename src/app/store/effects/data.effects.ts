import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import { GetData, EDataActions, GetDataSuccess } from '../actions/data.actions';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { WorkoutsDataMaps } from 'src/app/models/DefaultWorkouts';

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

constructor(
    private _dataService: DataServiceProvider,
    private _actions$: Actions,
    private _store: Store<IAppState>
) {}
}
