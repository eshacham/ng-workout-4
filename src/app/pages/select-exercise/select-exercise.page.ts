import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { SavedImage } from 'src/app/models/SavedImage';
import { Workout } from 'src/app/models/Workout';
import { ExerciseSet } from 'src/app/models/ExerciseSet';
import { Exercise } from 'src/app/models/Exercise';
import { Rep } from 'src/app/models/Rep';
import { ExerciseSetActionEvent } from 'src/app/models/ExerciseActionEvent';
import { ExerciseSetAction } from 'src/app/models/enums';

interface SelectedSavedImage extends SavedImage {
  isSelected: boolean;
}

@Component({
  selector: 'app-select-exercise',
  templateUrl: './select-exercise.page.html',
  styleUrls: ['./select-exercise.page.scss'],
})
export class SelectExercisePage implements OnInit, OnDestroy {

  images: SelectedSavedImage[];
  workout: Workout;
  workoutId: number;
  isSet: boolean;
  haveWorkoutsBeenReset = false;
  private subs: Subscription;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider) {
      this.images = [];
      this.isSet = false;
      this.route.params.subscribe(params => {
        this.workoutId = +params.id;
    });
  }

  get selectedImages(): SelectedSavedImage[] {
    return this.images.filter(i => i.isSelected);
  }

  get hasSelecteion(): boolean {
    return this.selectedImages.length > 0;
  }

  get isAddExerciseDisabled(): boolean {
    return this.haveWorkoutsBeenReset || !this.hasSelecteion;
  }

  async ngOnInit() {
    this.haveWorkoutsBeenReset = false;
    await this.getImages();
    this.workout = await this.dataService.getWorkout(this.workoutId);
    this.subs = this.dataService.workoutPublisher.subscribe(event => this.handleWorkoutActionEvent(event));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private async getImages() {
    const images = await this.dataService.getImages();
    this.images = images.map((image) => {
      return {
        isSelected: false,
        isDefault: image.isDefault,
        name: image.name,
        ionicPath: image.ionicPath,
        nativePath: image.nativePath
      };
    });
  }

  async handleWorkoutActionEvent (event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;
    switch (exerciseSetAction) {
      case ExerciseSetAction.ImagesReset:
          await this.getImages();
          break;
      case ExerciseSetAction.WorkoutReset:
        this.haveWorkoutsBeenReset = true;
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
      const id = Math.max(...this.workout.days[lastSelectedWorkoutDay].exerciseSets.map(e => e.id)) + 1;
      set.id = id;
      this.workout.days[lastSelectedWorkoutDay].exerciseSets.push(set);
    });
    this.dataService.saveWorkouts();
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getNewSets (): ExerciseSet[] {
    const superset = new ExerciseSet();
    superset.exercises = [];
    const sets: ExerciseSet[] = [];
    for (const image of this.selectedImages ) {
      console.log(`adding exercise ${image.name}`);
      const newRep = new Rep();
      const newExercise = new Exercise();
      newExercise.name = image.name;
      newExercise.imageUrl = image.ionicPath;
      newRep.times = 1;
      newExercise.reps = [newRep];
      if (!this.isSet) {
        const set = new ExerciseSet();
        set.exercises = [newExercise];
        sets.push(set);
      } else {
        superset.exercises.push(newExercise);
      }
    }
    return this.isSet ? [superset] : sets;
  }

  selectMuscle() {
    this.router.navigate(['../select-muscle'], {relativeTo: this.route});
  }
}
