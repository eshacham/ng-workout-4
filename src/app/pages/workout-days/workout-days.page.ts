import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { IonSlides as Slides} from '@ionic/angular';
import { Workout } from 'src/app/models/Workout';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { ExerciseSetSwitchModeEvent } from 'src/app/models/ExerciseSwitchModeEvent';
import { ExerciseSetActionEvent } from 'src/app/models/ExerciseActionEvent';
import { ExerciseSetAction, DisplayMode } from 'src/app/models/enums';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-days',
  templateUrl: './workout-days.page.html',
  styleUrls: ['./workout-days.page.scss'],
})
export class WorkoutDaysPage implements OnInit {

  workout: Workout;
  workoutDaysPublisher: Subject<ExerciseSetSwitchModeEvent> = new Subject();
  @ViewChild('slider') slides: Slides;

  workoutId: number;

  slideOpts = {
    autoHeight: false,
    pagination: {
      type: 'fraction',
      clickable: false,
      el: '.swiper-pagination',
    },
    noSwipingSelector: 'ion-range, ion-reorder, ion-fab, ion-button'
  };

  constructor (
    private route: ActivatedRoute,
    private dataService: DataServiceProvider) {
      this.route.params.subscribe(params => {
        console.log('getting workout id from route params', params);
        this.workoutId = +params.id;
    });
  }

  ngOnInit() {
    this.workout = this.dataService.getWorkout(this.workoutId);
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

  handleExerciseSetActionEvent(event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;

    switch (exerciseSetAction) {
      case ExerciseSetAction.Completed:
        console.log('workout: receieved completed event: ', JSON.stringify(event) );
        // this.handleExersiceSetComletion(event.exerciseIndex);
        break;
      case ExerciseSetAction.Delete:
        console.log('workout: receieved delete event: ', JSON.stringify(event));
        // this.deleteExercise(event.exercise, event.workoutDayName);
        break;
      case ExerciseSetAction.Edit:

        console.log('workout: receieved edit event: ', JSON.stringify(event));
        break;
      case ExerciseSetAction.Run:
        console.log('workout: receieved run event: ', JSON.stringify(event));
        this.publishWorkoutEvent(DisplayMode.Workout, event.workoutDayName);
        break;
    }
  }

  publishWorkoutEvent(displayMode: DisplayMode, runningExerciseDayName: string) {
    const workoutEvent =
      new ExerciseSetSwitchModeEvent(displayMode, null, runningExerciseDayName);
    this.workoutDaysPublisher.next(workoutEvent);
  }
}
