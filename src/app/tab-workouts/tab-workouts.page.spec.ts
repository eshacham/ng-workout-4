import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage';
import { StorageMock } from '../test-config/mocks-ionic';
import { TabWorkoutsPage } from './tab-workouts.page';

describe('TsbWorkoutsPage', () => {
  let component: TabWorkoutsPage;
  let fixture: ComponentFixture<TabWorkoutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabWorkoutsPage],
      providers: [
        { provide: Storage, useClass: StorageMock }
      ],
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
