import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { IonSlides as Slides} from '@ionic/angular';
import { Workout } from 'src/app/models/Workout';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { ExerciseSwitchModeEvent } from 'src/app/models/ExerciseSwitchModeEvent';

@Component({
  selector: 'app-workout-days',
  templateUrl: './workout-days.page.html',
  styleUrls: ['./workout-days.page.scss'],
})
export class WorkoutDaysPage implements OnInit {

  workout: Workout;
  workoutDaysPublisher: Subject<ExerciseSwitchModeEvent> = new Subject();
  @ViewChild('slider') slides: Slides;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceProvider) {
  }

  ngOnInit() {
    this.workout = this.dataService.storage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutdaysPage');
    if (this.slides) {
      const lastIndex = this.dataService.getLastSelectedWorkoutDay(this.workout.name);
      console.log('last index on view loaded', lastIndex);

      setTimeout(() => {
        this.slides.slideTo(lastIndex);
    }, 300);
    }
  }

  async slideChanged() {
    if (this.slides) {
      const lastIndex = await this.slides.getActiveIndex();
      console.log('last index on slide changes', lastIndex);
      this.dataService.setLastSelectedWorkoutDay(this.workout.name, lastIndex);
    }
  }

}
