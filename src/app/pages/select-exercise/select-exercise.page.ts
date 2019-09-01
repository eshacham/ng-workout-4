import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { ExerciseMedia } from 'src/app/models/ExerciseMedia';
import { Workout } from 'src/app/models/Workout';
import { ExerciseSet } from 'src/app/models/ExerciseSet';
import { Exercise } from 'src/app/models/Exercise';
import { Rep } from 'src/app/models/Rep';
import { Muscles, RepetitionSpeed } from 'src/app/models/enums';
import { MuscleFilterFor } from '../select-muscle/select-muscle.page';
import { IAppState } from '../../store/state/app.state';
import { Subscription, Subject } from 'rxjs';
import { LoadedDefaultImages } from '../../store/actions/defaults.actions';
import { takeUntil } from 'rxjs/operators';
import { selectHasDefaultImagesBeenReset, selectHasDefaultWorkoutsBeenReset } from 'src/app/store/selectors/defaults.selectors';
import { selectLibraryMusclesFilterState } from 'src/app/store/selectors/musclesFilter.selectors';
import { selectCurrentWorkoutSelectedDayId } from 'src/app/store/selectors/workouts.selectors';
import { Guid } from 'guid-typescript';

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

  workout: Workout;
  workoutId?: Guid;
  isSet = false;
  haveWorkoutsBeenReset = false;
  lastSelectedWorkoutDayId?: Guid;
  subs: Subscription;
  private ngUnsubscribeForImageReset: Subject<void> = new Subject<void>();
  private ngUnsubscribeForWorkoutReset: Subject<void> = new Subject<void>();
  private ngUnsubscribeForLibraryFilter: Subject<void> = new Subject<void>();
  private ngUnsubscribeForWorkoutDaySelected: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider,
    private store: Store<IAppState>) {
    this._images = [];
    this.subs = this.route.params.subscribe(params => {
      this.workoutId = Guid.parse(params.id);
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
    this.workout = await this.dataService.getWorkout(this.workoutId);
    this.store.select(selectHasDefaultImagesBeenReset)
      .pipe(takeUntil(this.ngUnsubscribeForImageReset))
      .subscribe(async (reset) => {
        console.log('select exercise redux - HasDefaultImagesBeenReset:', reset);
        if (reset) {
          this.images = await this.getImages();
          this.store.dispatch(new LoadedDefaultImages());
        }
      });
    this.store.select(selectHasDefaultWorkoutsBeenReset)
      .pipe(takeUntil(this.ngUnsubscribeForWorkoutReset))
      .subscribe(reset => {
        console.log('select exercise redux - HasDefaultWorkoutsBeenReset:', reset);
        this.haveWorkoutsBeenReset = reset;
      });
    this.store.select(selectLibraryMusclesFilterState)
      .pipe(takeUntil(this.ngUnsubscribeForLibraryFilter))
      .subscribe(async (filter) => {
        console.log('select-exercise redux - LibraryMusclesFilterState:', filter);
        this.filteredImages = this.filterImagesByMuscles(filter);
      });
    this.store.select(selectCurrentWorkoutSelectedDayId)
      .pipe(takeUntil(this.ngUnsubscribeForWorkoutDaySelected))
      .subscribe(async (selectedWorkoutDayState) => {
        if (selectedWorkoutDayState && this.workoutId.toString() === selectedWorkoutDayState.workoutId) {
          const workoutDayId = Guid.parse(selectedWorkoutDayState.dayId);
          this.lastSelectedWorkoutDayId = workoutDayId;
          console.log('select-exercise redux - getCurrentWorkoutLastSelectedDay:', workoutDayId);
        }
      });
  }

  ngOnDestroy() {
    console.log('onDestroy - select-exercise');
    this.subs.unsubscribe();
    this.ngUnsubscribeForImageReset.next();
    this.ngUnsubscribeForImageReset.complete();
    this.ngUnsubscribeForWorkoutReset.next();
    this.ngUnsubscribeForWorkoutReset.complete();
    this.ngUnsubscribeForLibraryFilter.next();
    this.ngUnsubscribeForLibraryFilter.complete();
    this.ngUnsubscribeForWorkoutDaySelected.next();
    this.ngUnsubscribeForWorkoutDaySelected.complete();
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
    const newSets = this.getNewSets();
    newSets.forEach((set) => {
      this.workout.days.find(day => day.id.equals(this.lastSelectedWorkoutDayId)).exerciseSets.push(set);
    });
    this.dataService.saveWorkouts();
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getNewSets(): ExerciseSet[] {
    let newSets: ExerciseSet[];
    const newExercises: Exercise[] = [];
    for (const image of this.selectedImages) {
      console.log('adding exercise media', image);
      const newRep = new Rep({
        times: 1
      });
      const newExercise = new Exercise({
        id: Guid.create(),
        name: image.media.name,
        media: image.media,
        reps: [newRep],
        repSpeed: RepetitionSpeed.OneOne,
        isFavorite: false,
        restBetweenReps: 20,
        restAfterExercise: 20
      });
      newExercises.push(newExercise);
    }

    const newId = Guid.create();
    if (this.isSet) {
      newSets = [new ExerciseSet({ id: newId, exercises: newExercises })];
    } else {
      newSets = newExercises.map((exe) => new ExerciseSet({ id: newId, exercises: [exe] }));
    }
    return newSets;
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
