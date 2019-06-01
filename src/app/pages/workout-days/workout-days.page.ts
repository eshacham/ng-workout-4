import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { IonSlides as Slides} from '@ionic/angular';
import { Workout } from 'src/app/models/Workout';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { ExerciseSetSwitchModeEvent } from 'src/app/models/ExerciseSwitchModeEvent';
import { ExerciseSetActionEvent } from 'src/app/models/ExerciseActionEvent';
import { ExerciseSetAction, DisplayMode } from 'src/app/models/enums';
import { ActivatedRoute } from '@angular/router';
import { WorkoutDay } from 'src/app/models/WorkoutDay';

@Component({
  selector: 'app-workout-days',
  templateUrl: './workout-days.page.html',
  styleUrls: ['./workout-days.page.scss'],
})
export class WorkoutDaysPage implements OnInit {

  workout: Workout;
  workoutId: number;
  workoutDaysPublisher: Subject<ExerciseSetSwitchModeEvent> = new Subject();

  @ViewChild('slider') slides: Slides;

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

  async ngOnInit() {
    this.workout = await this.dataService.getWorkout(this.workoutId);
    if (this.slides && this.workout) {
      console.log('ngOnInit this.workout.name --> ', this.workout.name);
      const lastIndex = this.dataService.getLastSelectedWorkoutDay(this.workout.name);
      console.log('last index on view loaded', lastIndex);
      await this.slides.slideTo(lastIndex, 0);
    }
  }

  async slideChanged() {
    if (this.slides && this.workout) {
      const lastIndex = await this.slides.getActiveIndex();
      console.log('last index on slide changes', lastIndex);
      this.dataService.setLastSelectedWorkoutDay(this.workout.name, lastIndex);
    }
  }
  async saveChanges() {
    await this.dataService.saveWorkouts();
  }

  async handleExerciseSetActionEvent(event: ExerciseSetActionEvent) {
    const exerciseSetAction: ExerciseSetAction = event.action;

    switch (exerciseSetAction) {
      case ExerciseSetAction.Completed:
        console.log('workout-days: receieved completed event: ', JSON.stringify(event) );
        break;
      case ExerciseSetAction.Delete:
        console.log('workout-days: receieved delete event: ', JSON.stringify(event));
        const index = this.getWorkoutDayIndexByName(event.workoutDayName);
        if (!this.workout.days[index].exerciseSets.length) {
          await this.deleteWorkoutDay(event.workoutDayName);
        }
        break;
      case ExerciseSetAction.Edit:
        console.log('workout-days: receieved edit event: ', JSON.stringify(event));
        break;
      case ExerciseSetAction.Run:
        console.log('workout-days: receieved run event: ', JSON.stringify(event));
        this.publishWorkoutEvent(DisplayMode.Workout, event.workoutDayName);
        break;
      case ExerciseSetAction.Save:
        console.log('workout-days: receieved save event: ', JSON.stringify(event));
        break;
      case ExerciseSetAction.AddDay:
        console.log('workout-days: receieved add day event: ', JSON.stringify(event));
        await this.addWorkoutDay(event.workoutDayName);
        break;
      case ExerciseSetAction.DeleteDay:
        console.log('workout-days: receieved delete day event: ', JSON.stringify(event));
        await this.deleteWorkoutDay(event.workoutDayName);
        break;
    }
  }

  private async addWorkoutDay(name: string) {
    const newDay = new WorkoutDay();
    newDay.exerciseSets = [];
    const index = this.getWorkoutDayIndexByName(name);
    console.log('splicing (insert) at ', index);
    this.workout.days.splice(index + 1, 0, newDay);
    await this.slides.update();
    await this.saveChanges();
    await this.slides.slideNext(0);
    console.log('moved next');
  }

  private async deleteWorkoutDay(name: string) {
    if (this.workout.days.length > 1) {
      const index = this.getWorkoutDayIndexByName(name);
      console.log('splicing (delete) at ', index);
      this.workout.days.splice(index, 1);
      await this.slides.update(); /// TODO: does not update the slides list
      await this.saveChanges();
      if (index > 0) {
        await this.slides.slideTo(index - 1, 0, true);
        console.log('moved prev');
      } else {
        await this.slides.slideTo(0, 0, true);
        console.log('moved next');
      }
    }
  }

  getWorkoutDayIndexByName(name) {
    return this.workout.days.findIndex(d => d.name === name);
  }

  publishWorkoutEvent(displayMode: DisplayMode, runningExerciseDayName: string) {
    const workoutEvent =
      new ExerciseSetSwitchModeEvent(displayMode, null, runningExerciseDayName);
    this.workoutDaysPublisher.next(workoutEvent);
  }
}
