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
import { AppState } from '../../store/reducers';
import * as DefeaultsActions from '../../store/actions/defaults.actions';
import { Subscription } from 'rxjs';

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
  workoutId: number;
  isSet = false;
  haveWorkoutsBeenReset = false;
  lastSelectedWorkoutDay = 0;
  subs: Subscription[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider,
    private store: Store<AppState>) {
    this._images = [];
    this.subs = [];
    this.subs.push(this.route.params.subscribe(params => {
      this.workoutId = +params.id;
    }));
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
    this.subs.push(this.dataService.getHasDefaultImagesBeenReset()
    .subscribe(async (reset) => {
      console.log('select exercise redux - HasDefaultImagesBeenReset:', reset);
      if (reset) {
        this.images = await this.getImages();
        this.store.dispatch(new DefeaultsActions.LoadedDefaultImages());
      }
    }));
    this.subs.push(this.dataService.getHasDefaultWorkoutsBeenReset()
    .subscribe(reset => {
      console.log('select exercise redux - HasDefaultWorkoutsBeenReset:', reset);
      this.haveWorkoutsBeenReset = reset;
    }));
    this.subs.push(this.dataService.getLibraryMusclesFilterState()
    .subscribe(async (filter) => {
      console.log('select-exercise redux - LibraryMusclesFilterState:', filter);
      this.filteredImages = this.filterImagesByMuscles(filter);
    }));
    this.subs.push(this.dataService.getCurrentWorkoutLastSelectedDay()
    .subscribe(async (workout) => {
      console.log('select-exercise redux - getCurrentWorkoutLastSelectedDay:', workout);
      this.lastSelectedWorkoutDay = workout.lastSelectedDay;
      console.log('last index on view loaded', this.lastSelectedWorkoutDay);
    }));
  }

  ngOnDestroy() {
    console.log('onDestroy - select-exercise');
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
    this.subs = [];
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
      this.workout.days[this.lastSelectedWorkoutDay].exerciseSets.push(set);
    });
    this.dataService.saveWorkouts();
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getMaxIdForWorkoutSets(): number {
    const maxSetId = Math.max(...this.workout.days[this.lastSelectedWorkoutDay].exerciseSets.map(e => e.id));
    return maxSetId;
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

    let maxId = this.getMaxIdForWorkoutSets();
    if (this.isSet) {
      newSets = [new ExerciseSet({ id: ++maxId, exercises: newExercises })];
    } else {
      newSets = newExercises.map((exe) => new ExerciseSet({ id: ++maxId, exercises: [exe] }));
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
