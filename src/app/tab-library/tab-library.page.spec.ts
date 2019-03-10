import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLibraryPage } from './tab-library.page';

describe('TabLibraryPage', () => {
  let component: TabLibraryPage;
  let fixture: ComponentFixture<TabLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabLibraryPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
