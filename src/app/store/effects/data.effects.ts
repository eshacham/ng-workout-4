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
    WorkoutsUpdated,
    UpdateImages,
    ImagesUpdated} from '../actions/data.actions';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { AllDataMaps } from 'src/app/models/interfaces';
import { selectWorkoutsData, selectImagesData } from '../selectors/data.selectors';

@Injectable()
export class WorkoutsEffects {
    @Effect()
    getAllData$ = this._actions$.pipe(
        ofType<GetData>(EDataActions.GetData),
        switchMap(async () => await this._dataService.getAllData()),
        switchMap((allData: AllDataMaps) => {
            return of(new GetDataSuccess(allData));
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

    @Effect()
    saveImages$ = this._actions$.pipe(
        ofType<UpdateImages>(EDataActions.UpdateImages),
        map(action => action),
        withLatestFrom(this._store.pipe(select(selectImagesData))),
        switchMap(([action, imagessData]) => {
            this._dataService.saveImages(imagessData);
            return of(new ImagesUpdated());
        })
    );
constructor(
    private _dataService: DataServiceProvider,
    private _actions$: Actions,
    private _store: Store<IAppState>
) {}
}
