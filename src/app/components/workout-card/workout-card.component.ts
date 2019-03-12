import { Component, OnInit, Input } from '@angular/core';
import { Workout } from '../../models/Workout';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent implements OnInit {

  @Input() workout: Workout;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {}

  goToWorkoutDays () {
    // this.navCtrl.navigateForward('/workout-days', { workout: this.workout} );
    this.router.navigate(['workout-days', this.workout]);
  }

  get daysCount(): number {
    return (this.workout.days) ? this.workout.days.length : 0;
  }
}
