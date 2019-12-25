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
    WorkoutsSavedError,
} from '../actions/data.actions';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { AllDataMaps, WorkoutsDataMaps, MediaDataMaps } from 'src/app/models/interfaces';
import { getWorkoutsData, getImagesData } from '../selectors/data.selectors';
import {
    ExerciseMediaActionsTypes,
    AddExerciseMedia,
    AddExerciseMediaSuccess,
    DeleteExerciseMedia,
    DeleteExerciseMediaSuccess,
    UpdateExerciseMedia,
    UpdateExerciseMediaSuccess,
    UpdateExerciseMediaUsage,
    UpdateExerciseMediaUsageSuccess
} from '../actions/exercisesMedia.actions';
import { ExerciseMediaBean } from 'src/app/models/ExerciseMedia';
import { ExerciseActionsTypes, DeleteExercise, DeleteExerciseInProgress } from '../actions/exercises.actions';
import { DeleteExerciseSet } from '../actions/exerciseSets.actions';
import {
    DeleteWorkout,
    WorkoutsActionsTypes,
    DeleteWorkoutInProgress,
    AddWorkout,
    AddWorkoutSuccess,
    ExportWorkout,
    ExportWorkoutSuccess,
    ImportWorkout,
    ImportWorkoutSuccess} from '../actions/workouts.actions';
import { getMediaIdsByWorkout, getMediaIdsByDay } from '../selectors/exercises.selectors';
import {
    MusclesFilterActionsTypes,
    AddExerciseMuscleFilter,
    AddExerciseMuscleFilterSuccess,
    DeleteExerciseMuscleFilter,
    DeleteExerciseMuscleFilterSuccess
} from '../actions/musclesFilter.actions';
import {
    WorkoutDaysActionsTypes,
    MoveWorkoutDay,
    MoveWorkoutDaySuccess,
    AddWorkoutDay,
    AddWorkoutDaySuccess,
    DeleteWorkoutDay,
    DeleteWorkoutDaySuccess,
    ChangeDisplayModeSuccess,
    ChangeDisplayMode
} from '../actions/workoutDays.actions';

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
                return of(new GetDataError(err.message));
            })
        ))
    );

    @Effect()
    saveWorkouts$ = this._actions$.pipe(
        ofType<UpdateWorkouts>(DataActionsTypes.UpdateWorkouts),
        map((action: UpdateWorkouts) => action),
        withLatestFrom(this._store.pipe(select(getWorkoutsData))),
        mergeMap(([action, workoutsData]) => from(this._dataService.saveWorkouts(workoutsData)).pipe(
            map(() => (new WorkoutsSavedSuccess())),
            catchError(err => {
                console.log('saveWorkouts effect - got an error:', err);
                return of(new WorkoutsSavedError(err.message));
            })
        ))
    );

    @Effect()
    saveImages$ = this._actions$.pipe(
        ofType<UpdateImages>(DataActionsTypes.UpdateImages),
        map((action: UpdateImages) => action),
        withLatestFrom(this._store.pipe(select(getImagesData))),
        mergeMap(([action, imagessData]) => from(this._dataService.saveImages(imagessData)).pipe(
            map(() => (new ImagesSavedSuccess())),
            catchError(err => {
                console.log('UpdateImages effect - got an error:', err);
                return of(new WorkoutsSavedError(err.message));
            })
        ))
    );

    @Effect()
    exportWorkout$ = this._actions$.pipe(
        ofType(WorkoutsActionsTypes.ExportWorkout),
        mergeMap((action: ExportWorkout) => from(this._dataService.exportWorkout(action.payload.workoutId)).pipe(
            map((exportId: string) => (new ExportWorkoutSuccess())),
            catchError(err => {
                console.log('export workout effect - got an error:', err);
                return of(new GetDataError(err.message));
            })
        ))
    );

    @Effect()
    importWorkout$ = this._actions$.pipe(
        ofType(WorkoutsActionsTypes.ImportWorkout),
        mergeMap((action: ImportWorkout) => from(this._dataService.importWorkout(action.payload.workoutId)).pipe(
            map((data: { workoutData: WorkoutsDataMaps, imageData: MediaDataMaps }) => (new ImportWorkoutSuccess())),
            catchError(err => {
                console.log('import workout effect - got an error:', err);
                return of(new GetDataError(err.message));
            })
        ))
    );

    @Effect()
    addNewImage$ = this._actions$.pipe(
        ofType(ExerciseMediaActionsTypes.AddExerciseMedia),
        mergeMap((action: AddExerciseMedia) => from(this._dataService.addImage(
            action.payload.origPath, action.payload.origName, action.payload.newName)).pipe(
                switchMap((newImage: ExerciseMediaBean) => [
                    (new AddExerciseMediaSuccess({ exerciseMedia: newImage })),
                    (new UpdateImages())]),
                catchError(err => {
                    console.log('AddExerciseMedia effect - got an error:', err);
                    return of(new GetDataError(err.message));
                })
            ))
    );

    @Effect()
    deleteImage$ = this._actions$.pipe(
        ofType(ExerciseMediaActionsTypes.DeleteExerciseMedia),
        mergeMap((action: DeleteExerciseMedia) => from(this._dataService.deleteImage(
            action.payload.image)).pipe(
                switchMap((imageId: string) => [
                    (new DeleteExerciseMediaSuccess({ imageId: imageId })),
                    (new UpdateImages())
                ]),
                catchError(err => {
                    console.log('DeleteExerciseMedia effect - got an error:', err);
                    return of(new GetDataError(err.message));
                })
            ))
    );

    @Effect()
    updateImage$ = this._actions$.pipe(
        ofType(ExerciseMediaActionsTypes.UpdateExerciseMedia),
        mergeMap((action: UpdateExerciseMedia) => ([
            new UpdateExerciseMediaSuccess(action.payload),
            new UpdateImages()
        ])),
        catchError(err => {
            console.log('UpdateExerciseMedia effect - got an error:', err);
            return of(new GetDataError(err.message));
        })
    );

    @Effect()
    updateImageUsage$ = this._actions$.pipe(
        ofType(ExerciseMediaActionsTypes.UpdateExerciseMediaUsage),
        mergeMap((action: UpdateExerciseMediaUsage) => ([
            new UpdateExerciseMediaUsageSuccess(action.payload),
            new UpdateImages()
        ])),
        catchError(err => {
            console.log('UpdateExerciseMediaUsage effect - got an error:', err);
            return of(new GetDataError(err.message));
        })
    );

    @Effect()
    deleteExercise$ = this._actions$.pipe(
        ofType(ExerciseActionsTypes.DeleteExercise),
        mergeMap((action: DeleteExercise) => {
            const actions: any[] = [
                new DeleteExerciseInProgress(action.payload)
            ];
            if (action.payload.deleteSet) {
                actions.push(new DeleteExerciseSet({
                    dayId: action.payload.dayId,
                    setId: action.payload.setId
                }));
            }
            actions.push(new UpdateExerciseMediaUsage({
                ids: [action.payload.mediaId],
                mediaUsageCounterInc: -1
            }));
            return actions;
        }),
        catchError(err => {
            console.log('DeleteExercise effect - got an error:', err);
            return of(new GetDataError(err.message));
        })
    );

    @Effect()
    deleteWorkout$ = this._actions$.pipe(
        ofType<DeleteWorkout>(WorkoutsActionsTypes.DeleteWorkout),
        map((action: DeleteWorkout) => action.payload),
        mergeMap((payload: { id: string, days: string[] }) =>
            of(payload).pipe(
                withLatestFrom(this._store.pipe(select(getMediaIdsByWorkout(payload.id)))),
            ),
        ),
        switchMap(([payload, mediaIds]) => {
            const actions: any[] = [];
            if (mediaIds.length) {
                actions.push(new UpdateExerciseMediaUsage({
                    ids: mediaIds,
                    mediaUsageCounterInc: -1
                }));
            }
            actions.push(new DeleteWorkoutInProgress({
                id: payload.id,
                days: payload.days
            }));
            actions.push(new UpdateWorkouts());
            return actions;
        }),
        catchError(err => {
            console.log('DeleteWorkout effect - got an error:', err);
            return of(new GetDataError(err.message));
        })
    );

    @Effect()
    deleteWorkoutDay$ = this._actions$.pipe(
        ofType<DeleteWorkoutDay>(WorkoutDaysActionsTypes.DeleteWorkoutDay),
        map((action: DeleteWorkoutDay) => action.payload),
        mergeMap((payload: { dayId: string }) =>
            of(payload).pipe(
                withLatestFrom(this._store.pipe(select(getMediaIdsByDay(payload.dayId)))),
            ),
        ),
        switchMap(([payload, mediaIds]) => {
            const actions: any[] = [];
            if (mediaIds.length) {
                actions.push(new UpdateExerciseMediaUsage({
                    ids: mediaIds,
                    mediaUsageCounterInc: -1
                }));
            }
            actions.push(new DeleteWorkoutDaySuccess(payload));
            actions.push(new UpdateWorkouts());
            return actions;
        }),
        catchError(err => {
            console.log('DeleteWorkoutDay effect - got an error:', err);
            return of(new GetDataError(err.message));
        })
    );

    @Effect()
    addExerciseMuscleFilter$ = this._actions$.pipe(
        ofType(MusclesFilterActionsTypes.AddExerciseMuscleFilter),
        mergeMap((action: AddExerciseMuscleFilter) => ([
            new AddExerciseMuscleFilterSuccess(action.payload),
            new UpdateImages()
        ])),
        catchError(err => {
            console.log('AddExerciseMuscleFilter effect - got an error:', err);
            return of(new GetDataError(err.message));
        })
    );

    @Effect()
    deleteExerciseMuscleFilter$ = this._actions$.pipe(
        ofType(MusclesFilterActionsTypes.DeleteExerciseMuscleFilter),
        mergeMap((action: DeleteExerciseMuscleFilter) => ([
            new DeleteExerciseMuscleFilterSuccess(action.payload),
            new UpdateImages()
        ])),
        catchError(err => {
            console.log('DeleteExerciseMuscleFilter effect - got an error:', err);
            return of(new GetDataError(err.message));
        })
    );

    @Effect()
    moveWorkoutDay$ = this._actions$.pipe(
        ofType(WorkoutDaysActionsTypes.MoveWorkoutDay),
        mergeMap((action: MoveWorkoutDay) => ([
            new MoveWorkoutDaySuccess(action.payload),
            new UpdateWorkouts()
        ])),
        catchError(err => {
            console.log('DeleteExerciseMuscleFilter effect - got an error:', err);
            return of(new GetDataError(err.message));
        })
    );

    @Effect()
    addWorkoutDay$ = this._actions$.pipe(
        ofType(WorkoutDaysActionsTypes.AddWorkoutDay),
        mergeMap((action: AddWorkoutDay) => ([
            new AddWorkoutDaySuccess(action.payload),
            new UpdateWorkouts()
        ])),
        catchError(err => {
            console.log('AddWorkoutDay effect - got an error:', err);
            return of(new GetDataError(err.message));
        })
    );
    @Effect()
    addWorkout$ = this._actions$.pipe(
        ofType(WorkoutsActionsTypes.AddWorkout),
        mergeMap((action: AddWorkout) => ([
            new AddWorkoutSuccess(action.payload),
            new UpdateWorkouts()
        ])),
        catchError(err => {
            console.log('AddWorkout effect - got an error:', err);
            return of(new GetDataError(err.message));
        })
    );

    @Effect()
    changeDisplayMode$ = this._actions$.pipe(
        ofType(WorkoutDaysActionsTypes.ChangeDisplayMode),
        mergeMap((action: ChangeDisplayMode) => ([
            new ChangeDisplayModeSuccess(action.payload),
            new UpdateWorkouts()
        ])),
        catchError(err => {
            console.log('ChangeDisplayMode effect - got an error:', err);
            return of(new GetDataError(err.message));
        })

    );

}
