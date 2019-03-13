import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDayPage } from './workout-day.page';

describe('WorkoutDayPage', () => {
  let component: WorkoutDayPage;
  let fixture: ComponentFixture<WorkoutDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutDayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
