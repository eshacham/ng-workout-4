import { Component, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { IonSlides as Slides} from '@ionic/angular';
import { Workout } from 'src/app/models/Workout';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { ExerciseSwitchModeEvent } from 'src/app/models/ExerciseSwitchModeEvent';
import { ExerciseActionEvent } from 'src/app/models/ExerciseActionEvent';
import { ExerciseAction, DisplayMode } from 'src/app/models/enums';

@Component({
  selector: 'app-workout-days',
  templateUrl: './workout-days.page.html',
  styleUrls: ['./workout-days.page.scss'],
})
export class WorkoutDaysPage implements OnInit {

  workout: Workout;
  workoutDaysPublisher: Subject<ExerciseSwitchModeEvent> = new Subject();
  @ViewChild('slider') slides: Slides;

  slideOpts = {
    autoHeight: false,
    pagination: {
      type: 'bullets',
      clickable: true,
      el: '.swiper-pagination',
    },
  };

  constructor(
    // private route: ActivatedRoute,
    private dataService: DataServiceProvider) {
  }

  ngOnInit() {
    this.workout = this.dataService.storage;
    if (this.slides && this.workout) {
      console.log('ngOnInit this.workout.name --> ', this.workout.name);
      const lastIndex = this.dataService.getLastSelectedWorkoutDay(this.workout.name);
      console.log('last index on view loaded', lastIndex);
      this.slides.slideTo(lastIndex, 1);
    }
  }



  async slideChanged() {
    if (this.slides && this.workout) {
      const lastIndex = await this.slides.getActiveIndex();
      console.log('last index on slide changes', lastIndex);
      this.dataService.setLastSelectedWorkoutDay(this.workout.name, lastIndex);
    }
  }

  handleExerciseActionEvent(event: ExerciseActionEvent) {
    const exerciseAction: ExerciseAction = event.action;
    switch (exerciseAction) {
      case ExerciseAction.Completed:
        console.log('workout: receieved completed event: ', event.exerciseIndex);
        // this.handleExersiceSetComletion(event.exerciseIndex);
        break;
      case ExerciseAction.Delete:
        console.log('workout: receieved delete event: ', event.exercise);
        // this.deleteExercise(event.exercise, event.workoutDayName);
        break;
      case ExerciseAction.Edit:
        console.log('workout: receieved edit event: ', event.exercise);
        break;
      case ExerciseAction.Run:
        console.log('workout: receieved run event: ', event.workoutDayName);
        this.publishWorkoutEvent(DisplayMode.Workout, event.workoutDayName);
        break;
    }
  }

  publishWorkoutEvent(displayMode: DisplayMode, runningExerciseDayName: string) {
    const workoutEvent =
      new ExerciseSwitchModeEvent(displayMode, null, runningExerciseDayName);
    this.workoutDaysPublisher.next(workoutEvent);
  }
}
