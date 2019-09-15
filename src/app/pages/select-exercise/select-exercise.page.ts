import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { ExerciseMedia } from 'src/app/models/ExerciseMedia';
import { ExerciseSet, ExerciseSetBean } from 'src/app/models/ExerciseSet';
import { ExerciseBean } from 'src/app/models/Exercise';
import { Rep } from 'src/app/models/Rep';
import { Muscles, RepetitionSpeed } from 'src/app/models/enums';
import { MuscleFilterFor } from '../select-muscle/select-muscle.page';
import { IAppState } from '../../store/state/app.state';
import { Subscription, Subject } from 'rxjs';
import { LoadedImages } from '../../store/actions/data.actions';
import { takeUntil } from 'rxjs/operators';
import { selectHasImagesBeenReset, selectHasWorkoutsBeenReset } from 'src/app/store/selectors/data.selectors';
import { selectLibraryMusclesFilterState } from 'src/app/store/selectors/musclesFilter.selectors';
import { selectCurrentWorkoutSelectedDayId } from 'src/app/store/selectors/workouts.selectors';
import { Guid } from 'guid-typescript';
import { AddExerciseSets } from 'src/app/store/actions/exerciseSets.actions';

interface SelectedExerciseMedia {
  isSelected: boolean;
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
  subs: Subscription;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider,
    private store: Store<IAppState>) {
    this._images = [];
    this.subs = this.route.params.subscribe(params => {
      this.workoutId = params.id;
    });
  }

  _images: SelectedExerciseMedia[];
  get images(): SelectedExerciseMedia[] {
    if (this.useFilter) {
      return this.filteredImages;
    } else {
      return this._images;
    }
  }
  set images(images: SelectedExerciseMedia[]) {
    this._images = images;
  }

  _filteredImages: SelectedExerciseMedia[];
  get filteredImages(): SelectedExerciseMedia[] {
    return this._filteredImages;
  }
  set filteredImages(images: SelectedExerciseMedia[]) {
    this._filteredImages = images;
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

  get selectedImages(): SelectedExerciseMedia[] {
    return this._images.filter(i => i.isSelected);
  }

  get hasSelecteion(): boolean {
    return this.selectedImages.length > 0;
  }

  get isAddExerciseDisabled(): boolean {
    return this.haveWorkoutsBeenReset || !this.hasSelecteion;
  }

  async ngOnInit() {
    this.haveWorkoutsBeenReset = false;
    this.images = await this.getImages();
    this.store.select(selectHasImagesBeenReset)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (reset) => {
        console.log('select exercise redux - HasDefaultImagesBeenReset:', reset);
        if (reset) {
          this.images = await this.getImages();
          this.store.dispatch(new LoadedImages());
        }
      });
    this.store.select(selectHasWorkoutsBeenReset)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(reset => {
        console.log('select exercise redux - HasDefaultWorkoutsBeenReset:', reset);
        this.haveWorkoutsBeenReset = reset;
      });
    this.store.select(selectLibraryMusclesFilterState)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(async (filter) => {
        console.log('select-exercise redux - LibraryMusclesFilterState:', filter);
        this.filteredImages = this.filterImagesByMuscles(filter);
      });
    this.store.select(selectCurrentWorkoutSelectedDayId)
      .pipe(takeUntil(this.ngUnsubscribe))
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

  private async getImages(): Promise<SelectedExerciseMedia[]> {
    const images = await this.dataService.getImages();
    return images.map((image) => {
      return {
        isSelected: false,
        media: image,
      };
    });
  }

  filterImagesByMuscles(musclesFilter: Muscles[]): SelectedExerciseMedia[] {
    console.log('select-execrcise: filtering by muscles', Array.from(musclesFilter));
    if (musclesFilter.length === 0) {
      return [];
    }
    const images = this._images.filter((image) => {
      const intersection =
        image.media.muscles.filter(imageMuscle => musclesFilter.includes(imageMuscle));
      return (intersection.length > 0);
    });
    return images;
  }

  addExercise() {
    if (this.haveWorkoutsBeenReset) {
      console.log('select-exercise: Workouts have been reset! Can\'t update it now');
      return;
    }
    const { sets, exes } = this.getNewSets();
    this.store.dispatch(new AddExerciseSets({
      dayId: this.lastSelectedWorkoutDayId,
      sets: sets,
      exes: exes
    }));
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getNewSets(): { sets: ExerciseSetBean[], exes: ExerciseBean[] } {
    let newSets: ExerciseSetBean[];
    let newExercises: ExerciseBean[];
    newExercises = this.selectedImages
      .map(image => ExerciseBean.defaultExerciseBean(Guid.raw(), image.media));
    if (this.isSet) {
      newSets = [this.makeNewSet(newExercises)];
    } else {
      newSets = newExercises.map((exe) =>  this.makeNewSet([exe]));
    }
    return { sets: newSets, exes: newExercises };
  }

  private makeNewSet(newExercises: ExerciseBean[]): ExerciseSetBean {
    return new ExerciseSetBean({
      id: Guid.raw(),
      workoutDayId: this.lastSelectedWorkoutDayId,
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
