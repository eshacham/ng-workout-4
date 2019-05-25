import { Component, OnInit, Input } from '@angular/core';
import { Workout } from '../../models/Workout';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent implements OnInit {

  @Input() workout: Workout;

  constructor(
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { }

  goToWorkoutDays() {
    this.router.navigate([`workout-days/${this.workout.id}`], {relativeTo: this.route});
  }

  get daysCount(): number {
    return (this.workout.days) ? this.workout.days.length : 0;
  }
}
