import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { ExerciseMedia } from 'src/app/models/ExerciseMedia';
import { ExerciseSetBean } from 'src/app/models/ExerciseSet';
import { ExerciseBean } from 'src/app/models/Exercise';
import { Muscles } from 'src/app/models/enums';
import { MuscleFilterFor } from '../select-muscle/select-muscle.page';
import { IAppState } from '../../store/state/app.state';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { getHasDataBeenReset } from 'src/app/store/selectors/data.selectors';
import { getLibraryMusclesFilter } from 'src/app/store/selectors/musclesFilter.selectors';
import { getCurrentWorkoutSelectedDayId } from 'src/app/store/selectors/workouts.selectors';
import { Guid } from 'guid-typescript';
import { AddExerciseSets } from 'src/app/store/actions/exerciseSets.actions';
import { getExercisesMedias } from 'src/app/store/selectors/ExercisesMedia.selectors';

interface SelectedExerciseMedia {
  isSelected: boolean;
  newName?: string;
  media: ExerciseMedia;
}

@Component({
  selector: 'app-select-exercise',
  templateUrl: './select-exercise.page.html',
  styleUrls: ['./select-exercise.page.scss'],
})
export class SelectExercisePage implements OnInit, OnDestroy {

  workoutId?: string;
  isSet = false;
  haveWorkoutsBeenReset = false;
  lastSelectedWorkoutDayId?: string;
  private musclesFilter: Muscles[];
  private subs: Subscription;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<IAppState>) {
    this._images = [];
    this.subs = this.route.params.subscribe(params => {
      this.workoutId = params.id;
    });
  }

  _images: SelectedExerciseMedia[];
  get images(): SelectedExerciseMedia[] {
    return this._images;
  }
  set images(images: SelectedExerciseMedia[]) {
    this._images = images;
  }

  _useFilter = false;
  get useFilter(): boolean {
    return this._useFilter;
  }
  set useFilter(use: boolean) {
    if (this._useFilter !== use) {
      this._useFilter = use;
    }
  }

  get filteredMusclesCount() {
    return this.musclesFilter.length;
  }

  get selectedImages(): SelectedExerciseMedia[] {
    return this._images.filter(i => i.isSelected);
  }

  get hasSelecteion(): boolean {
    return this.selectedImages.length > 0;
  }

  get isAddExerciseDisabled(): boolean {
    return !this.hasSelecteion;
  }

  async ngOnInit() {
    this.store.select(getExercisesMedias)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(media => {
      this.images = media.map((image) => {
        return {
          isSelected: false,
          media: image,
        };
      });
    });

    this.store.select(getHasDataBeenReset)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(reset => {
        console.log('select exercise redux - HasDefaultWorkoutsBeenReset:', reset);
        this.haveWorkoutsBeenReset = reset;
      });

    this.store.select(getLibraryMusclesFilter)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (filter) => {
        console.log('select-exercise redux - LibraryMusclesFilterState:', filter);
        this.musclesFilter = filter;
      });

    this.store.select(getCurrentWorkoutSelectedDayId)
      .pipe(take(1))
      .subscribe(async (selectedWorkoutDayState) => {
        if (selectedWorkoutDayState && this.workoutId === selectedWorkoutDayState.workoutId) {
          const workoutDayId = selectedWorkoutDayState.dayId;
          this.lastSelectedWorkoutDayId = workoutDayId;
          console.log('select-exercise - selectCurrentWorkoutSelectedDayId:', workoutDayId);
        }
      });
  }

  ngOnDestroy() {
    console.log('onDestroy - select-exercise');
    this.subs.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getFilteredImages(): SelectedExerciseMedia[] {
    if (!this.useFilter) {
      return this.images;
    }
    if (this.filteredMusclesCount === 0) {
      return [];
    }
    const images = this._images.filter((image) => {
      const intersection =
        image.media.muscles.filter(imageMuscle => this.musclesFilter.includes(imageMuscle));
      return (intersection.length > 0);
    });
    return images;
  }

  setImageName(event, image: SelectedExerciseMedia) {
    image.newName = event.target.value;
  }

  addExercise() {
    const { sets, exes } = this.getNewSets();
    this.store.dispatch(new AddExerciseSets({
      dayId: this.lastSelectedWorkoutDayId,
      sets: sets,
      exes: exes
    }));
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  goBack() {
    console.log('select-exercise: Workouts have been reset! Can\'t update it now');
    this.router.navigate(['']);
  }

  getNewSets(): { sets: ExerciseSetBean[], exes: ExerciseBean[] } {
    let newSets: ExerciseSetBean[];
    let newExercises: ExerciseBean[];
    let setIds: string[];

    if (this.isSet) {
      setIds = [Guid.raw()];
      newExercises = this.makeNewExercises(setIds);
      newSets = [this.makeNewSet(newExercises, this.workoutId, this.lastSelectedWorkoutDayId, setIds[0])];
    } else {
      setIds = this.selectedImages.map(_ => Guid.raw());
      newExercises = this.makeNewExercises(setIds);
      newSets = newExercises.map((exe, index) => {
        return this.makeNewSet([exe], this.workoutId, this.lastSelectedWorkoutDayId, setIds[index]);
      });
    }
    return { sets: newSets, exes: newExercises };
  }

  private makeNewExercises(setIds: string[]) {
    const newExercises = this.selectedImages
      .map((image, index) => {
        return ExerciseBean.defaultExerciseBean(
          Guid.raw(),
          this.isSet ? setIds[0] : setIds[index],
          this.lastSelectedWorkoutDayId,
          this.workoutId,
          image.media,
          { name: image.newName });
      });
    return newExercises;
  }

  private makeNewSet(
    newExercises: ExerciseBean[],
    workoutId: string,
    dayId: string,
    id: string): ExerciseSetBean {
    return new ExerciseSetBean({
      id: id,
      dayId: dayId,
      workoutId: workoutId,
      exercises: newExercises.map(exe => exe.id)
    });
  }

  async selectMuscle() {
    const extra: NavigationExtras = {
      relativeTo: this.route,
      state: {
        muscleFilterUsage: {
          for: MuscleFilterFor.SelectExercise
        }
      }
    };
    this.router.navigate(['../select-muscle'], extra);
  }
}
