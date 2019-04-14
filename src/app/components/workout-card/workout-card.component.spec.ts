import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCardComponent } from './workout-card.component';
import { Router } from '@angular/router';
import { MockRouter, defaultFirstWorkout } from 'src/app/test-config/mocks-ionic';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';
import { Workout } from 'src/app/models/Workout';

@Component({
  selector: `host-component`,
  template: `
  <app-workout-card
    [inWorkoutDayPublisher]="inWorkoutDayPublisher">
  </app-workout-card>`
})
class TestHostComponent {
  private workout: Workout = defaultFirstWorkout;
}

describe('WorkoutCardPage', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let component: WorkoutCardComponent;
  let fixture: ComponentFixture<WorkoutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, WorkoutCardComponent ],
      providers: [
        { provide: Router, useClass: MockRouter },
        DataServiceProvider
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    fixture = TestBed.createComponent(WorkoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
