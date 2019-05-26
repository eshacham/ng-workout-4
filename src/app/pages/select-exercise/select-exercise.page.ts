import { Component, OnInit } from '@angular/core';
import { SavedImage, DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { Workout } from 'src/app/models/Workout';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseSet } from 'src/app/models/ExerciseSet';
import { Exercise } from 'src/app/models/Exercise';
import { Rep } from 'src/app/models/Rep';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-exercise',
  templateUrl: './select-exercise.page.html',
  styleUrls: ['./select-exercise.page.scss'],
})
export class SelectExercisePage implements OnInit {

  images: SavedImage[];
  workout: Workout;
  workoutId: number;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider) {
      this.images = [];
      this.route.params.subscribe(params => {
        console.log('getting workout id from route params', params);
        this.workoutId = +params.id;
    });
  }

  async ngOnInit() {
    this.images = await this.dataService.loadStoredImages();
    this.workout = this.dataService.getWorkout(this.workoutId);
  }

  /// TODO need a popover to setup the exercise details!
  select (image: SavedImage) {
    const lastSelectedWorkoutDay =
      this.dataService.getLastSelectedWorkoutDay(this.workout.name);
    console.log(`adding exercise: ${image} to ${this.workout.name} in day ${lastSelectedWorkoutDay}`);
    let newExerciseSet: ExerciseSet;
    let newExercise: Exercise;
    let newRep: Rep;
    newExercise = new Exercise();
    newExercise.name = image.name;
    newExercise.imageUrl = image.path;
    newRep = new Rep();
    newRep.times = 1;
    newExercise.reps = [newRep];
    newExerciseSet = new ExerciseSet();
    newExerciseSet.exercises = [newExercise];
    this.workout.days[lastSelectedWorkoutDay].exerciseSets.push(newExerciseSet);
    this.dataService.saveWorkouts();
    this.navCtrl.back();
  }

}
