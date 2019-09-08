import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { WorkoutCardComponent } from './workout-card.component';
import { MockRouter, defaultFirstWorkout } from 'src/app/test-config/mocks-ionic';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';

describe('WorkoutCardPage', () => {
  let component: WorkoutCardComponent;
  let fixture: ComponentFixture<WorkoutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutCardComponent ],
      providers: [
        { provide: Router, useClass: MockRouter },
        DataServiceProvider
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCardComponent);
    component = fixture.componentInstance;
    component.workout$ = defaultFirstWorkout;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
