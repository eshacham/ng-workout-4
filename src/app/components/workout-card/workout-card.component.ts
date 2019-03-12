import { Component, OnInit, Input } from '@angular/core';
import { Workout } from '../../models/Workout';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent implements OnInit {

  @Input() workout: Workout;

  constructor(
    private router: Router,
    // private route: ActivatedRoute,
    private dataService: DataServiceProvider) { }

  ngOnInit() {}

  goToWorkoutDays () {
    this.dataService.storage = this.workout;
    this.router.navigate(['/tabs/tab-workouts/workout-days']);
    // this.router.navigate(['workout-days'], { relativeTo: this.route });
  }

  get daysCount(): number {
    return (this.workout.days) ? this.workout.days.length : 0;
  }
}
