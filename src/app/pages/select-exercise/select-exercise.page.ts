import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { ExerciseMedia } from 'src/app/models/ExerciseMedia';
import { Workout } from 'src/app/models/Workout';
import { ExerciseSet } from 'src/app/models/ExerciseSet';
import { Exercise } from 'src/app/models/Exercise';
import { Rep } from 'src/app/models/Rep';
import { ExerciseSetActionEvent } from 'src/app/models/ExerciseActionEvent';
import { ExerciseSetAction, Muscles, RepetitionSpeed } from 'src/app/models/enums';
import { MuscleFilterFor } from '../select-muscle/select-muscle.page';

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

  _images: SelectedExerciseMedia[];
  workout: Workout;
  workoutId: number;
  isSet = false;
  haveWorkoutsBeenReset = false;
  _useFilter = false;
  private subs: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider) {
    this._images = [];
    this.route.params.subscribe(params => {
      this.workoutId = +params.id;
    });
  }

  get images(): SelectedExerciseMedia[] {
    if (this.useFilter) {
      return this.filterImagesByMuscles(this.dataService.libraryMuscleFilter);
    } else {
      return this._images;
    }
  }
  set images(images: SelectedExerciseMedia[]) {
    this._images = images;
  }

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
    this.subs = this.dataService.workoutPublisher.subscribe(event => this.handleWorkoutActionEvent(event));
    this.dataService.getHasDefaultWorkoutsBeenReset().subscribe(reset => {
      console.log('select exercise redux - HasDefaultWorkoutsBeenReset:', reset);
      this.haveWorkoutsBeenReset = reset;
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
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

  filterImagesByMuscles(muscles: Set<Muscles>): SelectedExerciseMedia[] {
    console.log('select-execrcise: filtering by muscles', Array.from(muscles));
    if (muscles.size === 0) {
      return [];
    }
    const images = this._images.filter((image) => {
      const intersection =
        new Set(Array.from(image.media.muscles).filter(x => muscles.has(x)));
      return (intersection.size > 0);
    });
    return images;
  }

  async handleWorkoutActionEvent(event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;
    switch (exerciseSetAction) {
      case ExerciseSetAction.ImagesReset:
        this.images = await this.getImages();
        break;
    }
  }

  addExercise() {
    if (this.haveWorkoutsBeenReset) {
      console.log('select-exercise: Workouts have been reset! Can\'t update it now');
      return;
    }
    const newSets = this.getNewSets();
    const lastSelectedWorkoutDay = this.dataService.getLastSelectedWorkoutDay(this.workout.name);
    newSets.forEach((set) => {
      this.workout.days[lastSelectedWorkoutDay].exerciseSets.push(set);
    });
    this.dataService.saveWorkouts();
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getMaxIdForWorkoutSets(): number {
    const lastSelectedWorkoutDay = this.dataService.getLastSelectedWorkoutDay(this.workout.name);
    const maxSetId = Math.max(...this.workout.days[lastSelectedWorkoutDay].exerciseSets.map(e => e.id));
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
