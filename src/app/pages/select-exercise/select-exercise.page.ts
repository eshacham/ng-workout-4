import { Component, OnInit } from '@angular/core';
import { SavedImage, DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { Workout } from 'src/app/models/Workout';
import { ActivatedRoute } from '@angular/router';
import { ExerciseSet } from 'src/app/models/ExerciseSet';
import { Exercise } from 'src/app/models/Exercise';
import { Rep } from 'src/app/models/Rep';
import { NavController } from '@ionic/angular';

interface SelectedSavedImage extends SavedImage {
  isSelected: boolean;
}

@Component({
  selector: 'app-select-exercise',
  templateUrl: './select-exercise.page.html',
  styleUrls: ['./select-exercise.page.scss'],
})
export class SelectExercisePage implements OnInit {

  images: SelectedSavedImage[];
  workout: Workout;
  workoutId: number;
  isSet: boolean;

  constructor (
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider) {
      this.images = [];
      this.isSet = false;
      this.route.params.subscribe(params => {
        console.log('getting workout id from route params', params);
        this.workoutId = +params.id;
    });
  }

  get selectedImages(): SelectedSavedImage[] {
    return this.images.filter(i => i.isSelected);
  }

  get hasSelecteion(): boolean {
    return this.selectedImages.length > 0;
  }

  async ngOnInit() {
    const images = await this.dataService.getImages();
    this.images = images.map((image) => {
      return {
        isSelected: false,
        name: image.name,
        ionicPath: image.ionicPath,
        nativePath: image.nativePath };
    });
    this.workout = await this.dataService.getWorkout(this.workoutId);
  }

  addExercise() {
    const newSets = this.getNewSets();
    const lastSelectedWorkoutDay =
      this.dataService.getLastSelectedWorkoutDay(this.workout.name);
    this.workout.days[lastSelectedWorkoutDay].exerciseSets.push(...newSets);
    this.dataService.saveWorkouts();
    this.navCtrl.back();
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
}
