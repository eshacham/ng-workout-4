import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, from } from 'rxjs';
import { switchMap, map, withLatestFrom, mergeMap, catchError } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import {
    GetData,
    DataActionsTypes,
    GetDataSuccess,
    UpdateWorkouts,
    WorkoutsSavedSuccess,
    UpdateImages,
    ImagesSavedSuccess,
    GetDataError,
} from '../actions/data.actions';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { AllDataMaps } from 'src/app/models/interfaces';
import { getWorkoutsData, getImagesData } from '../selectors/data.selectors';

@Injectable()
export class DataEffects {

    constructor(
        private _dataService: DataServiceProvider,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }

    @Effect()
    getAllData$ = this._actions$.pipe(
        ofType(DataActionsTypes.GetData),
        mergeMap((action: GetData) => from(this._dataService.getAllData()).pipe(
            map((allData: AllDataMaps) => (new GetDataSuccess(allData))),
            catchError(err => {
                console.log('getAllData effect - got an error:', err);
                return of(new GetDataError(err));
            })
        ))
    );

    @Effect()
    saveWorkouts$ = this._actions$.pipe(
        ofType<UpdateWorkouts>(DataActionsTypes.UpdateWorkouts),
        map(action => action),
        withLatestFrom(this._store.pipe(select(getWorkoutsData))),
        switchMap(([action, workoutsData]) => {
            this._dataService.saveWorkouts(workoutsData);
            return of(new WorkoutsSavedSuccess());
        })
    );

    @Effect()
    saveImages$ = this._actions$.pipe(
        ofType<UpdateImages>(DataActionsTypes.UpdateImages),
        map(action => action),
        withLatestFrom(this._store.pipe(select(getImagesData))),
        switchMap(([action, imagessData]) => {
            this._dataService.saveImages(imagessData);
            return of(new ImagesSavedSuccess());
        })
    );

}
