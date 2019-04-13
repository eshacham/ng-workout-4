import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDaysPage } from './workout-days.page';
import { DataServiceProvider } from 'src/app/providers/data-service/data-service';

describe('WorkoutDaysPage', () => {
  let component: WorkoutDaysPage;
  let fixture: ComponentFixture<WorkoutDaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutDaysPage ],
      providers: [ DataServiceProvider ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutDaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
