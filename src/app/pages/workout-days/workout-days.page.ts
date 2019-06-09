import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
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
  activeDayIndex: number;

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
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private dataService: DataServiceProvider) {
      this.route.params.subscribe(params => {
        console.log('getting workout id from route params', params);
        this.workoutId = +params.id;
    });
  }

  get days(): WorkoutDay[] {
    if (!this.workout || !this.workout.days.length) {
      return [];
    }
   return this.workout.days.filter(day => day);
  }

  async ngOnInit() {
    this.workout = await this.dataService.getWorkout(this.workoutId);
    if (this.slides && this.workout) {
      console.log('ngOnInit this.workout.name --> ', this.workout.name);
      this.activeDayIndex = this.dataService.getLastSelectedWorkoutDay(this.workout.name);
      console.log('last index on view loaded', this.activeDayIndex);
      await this.slides.slideTo(this.activeDayIndex, 0);
    }
  }

  get isLastDayActive(): boolean {
    return this.activeDayIndex === this.workout.days.length - 1;
  }
  get isFirstDayActive(): boolean {
    return this.activeDayIndex === 0;
  }
  get isOneDayOnly(): boolean {
    return this.workout.days.length === 1;
  }

  async slideChanged() {
    if (this.slides && this.workout) {
      this.activeDayIndex = await this.slides.getActiveIndex();
      console.log('last index on slide changes', this.activeDayIndex);
      this.dataService.setLastSelectedWorkoutDay(this.workout.name, this.activeDayIndex);
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
        if (!this.workout.days[this.activeDayIndex].exerciseSets.length) {
          await this.deleteWorkoutDay(this.activeDayIndex);
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
        await this.deleteWorkoutDay(this.activeDayIndex);
        break;
      case ExerciseSetAction.MoveDayForward:
        console.log('workout-days: receieved move day forward event: ', JSON.stringify(event));
        await this.moveForwardWorkoutDay(this.activeDayIndex);
        break;
      case ExerciseSetAction.MoveDayBack:
        console.log('workout-days: receieved move day back event: ', JSON.stringify(event));
        await this.moveBackWorkoutDay(this.activeDayIndex);
        break;
    }
  }

  private async moveForwardWorkoutDay(index: number) {
    console.log('moving day forward');
    if (index + 1 < this.workout.days.length) {
      this.workout.days.splice(index, 0, this.workout.days.splice(index + 1, 1)[0]);
      await this.slides.update();
      await this.saveChanges();
      await this.slides.slideNext(0);
    }
  }

  private async moveBackWorkoutDay(index: number) {
    console.log('moving day back');
    if (index - 1 >= 0) {
      this.workout.days.splice(index, 0, this.workout.days.splice(index - 1, 1)[0]);
      await this.slides.update();
      await this.saveChanges();
      await this.slides.slidePrev(0);
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
    console.log('sliding forward');
    await this.slides.slideNext(0);
  }

  private async deleteWorkoutDay(index: number) {
    if (this.workout.days.length > 1) {
      console.log('splicing (delete) at ', index);
      if (index > 0) {
        console.log('sliding back');
        await this.slides.slideTo(index - 1, 0, true);
      } else {
        console.log('sliding forward');
        await this.slides.slideTo(1, 0, true);
      }
      let day = this.workout.days.splice(index, 1);
      day = null;
      await this.slides.update(); /// TODO: does not update the slides list
      await this.saveChanges();
      console.log(`deleted day ${index} out of ${this.workout.days.length} days`);
      this.cdr.detectChanges();
    }
  }

  getWorkoutDayIndexByName(name: string) {
    return this.workout.days.findIndex(d => d.name === name);
  }

  publishWorkoutEvent(displayMode: DisplayMode, runningExerciseDayName: string) {
    const workoutEvent =
      new ExerciseSetSwitchModeEvent(displayMode, null, runningExerciseDayName);
    this.workoutDaysPublisher.next(workoutEvent);
  }
}
