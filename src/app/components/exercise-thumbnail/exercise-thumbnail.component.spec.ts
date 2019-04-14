import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseThumbnailComponent } from './exercise-thumbnail.component';
import { PopoverController } from '@ionic/angular';
import { PopoverControllerMock, defaultFirstWorkout } from 'src/app/test-config/mocks-ionic';
import { Subject } from 'rxjs';


// @Component({
//   selector: `host-component`,
//   template: `<app-exercise-thumbnail></app-exercise-thumbnail>`
// })
// class TestHostComponent {
//   @ViewChild(ExerciseThumbnailComponent)
//   public exerciseThumbnailComponent: ExerciseThumbnailComponent;
// }

describe('ExerciseThumbnailPage', () => {
  // let testHostComponent: TestHostComponent;
  // let testHostFixture: ComponentFixture<TestHostComponent>;
  let component: ExerciseThumbnailComponent;
  let fixture: ComponentFixture<ExerciseThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseThumbnailComponent],
      providers: [
        { provide: PopoverController, useClass: PopoverControllerMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // testHostFixture = TestBed.createComponent(TestHostComponent);
    // testHostComponent = testHostFixture.componentInstance;
    // testHostComponent.exerciseThumbnailComponent.inWorkoutDayPublisher = new Subject();
    // testHostComponent.exerciseThumbnailComponent.exercise =
      defaultFirstWorkout.days[0].exercises[0];
    // testHostFixture.detectChanges();
    fixture = TestBed.createComponent(ExerciseThumbnailComponent);
    component = fixture.componentInstance;
    component.inWorkoutDayPublisher = new Subject();
    component.exercise =
      defaultFirstWorkout.days[0].exercises[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
