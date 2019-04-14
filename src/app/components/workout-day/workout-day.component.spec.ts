import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDayComponent } from './workout-day.component';
import { ExerciseSwitchModeEvent } from 'src/app/models/ExerciseSwitchModeEvent';
import { Subject } from 'rxjs';

@Component({
  selector: `host-component`,
  template: `
  <app-workout-day
  [inWorkoutDaysPublisher]="workoutDaysPublisher">
  </app-workout-day>`
})
class TestHostComponent {
  private inWorkoutDaysPublisher: Subject<ExerciseSwitchModeEvent> =
    new Subject();
}
describe('WorkoutDayPage', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let component: WorkoutDayComponent;
  let fixture: ComponentFixture<WorkoutDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, WorkoutDayComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    fixture = TestBed.createComponent(WorkoutDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
