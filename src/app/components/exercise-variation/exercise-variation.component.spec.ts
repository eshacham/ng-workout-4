import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseVariationComponent } from './exercise-variation.component';
import { PopoverController } from '@ionic/angular';
import { PopoverControllerMock } from 'src/app/test-config/mocks-ionic';
import { defaultFirstWorkout } from '../../test-config/mocks-ionic';
import { ExerciseSet } from 'src/app/models/ExerciseSet';

@Component({
  selector: `host-component`,
  template: `
  <component-under-test
    [exerciseSet]="exerciseSet">
  </component-under-test>`
})
class TestHostComponent {
  private exerciseSet: ExerciseSet =
    defaultFirstWorkout.days[0].exercises[0].sets[0];
}

describe('ExerciseVariationPage', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let component: ExerciseVariationComponent;
  let fixture: ComponentFixture<ExerciseVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseVariationComponent, TestHostComponent ],
      providers: [
        { provide: PopoverController, useClass: PopoverControllerMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    fixture = TestBed.createComponent(ExerciseVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
