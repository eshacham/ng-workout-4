import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabWorkoutsPage } from './tab-workouts.page';

describe('WorkoutsPage', () => {
  let component: TabWorkoutsPage;
  let fixture: ComponentFixture<TabWorkoutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabWorkoutsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabWorkoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
