import { TestBed } from '@angular/core/testing';

import { ThemeServiceProvider } from './theme-service';

describe('ThemeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeServiceProvider = TestBed.get(ThemeServiceProvider);
    expect(service).toBeTruthy();
  });
});
