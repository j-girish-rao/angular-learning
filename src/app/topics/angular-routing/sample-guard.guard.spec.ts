import { TestBed } from '@angular/core/testing';

import { SampleGuardGuard } from './sample-guard.guard';

describe('SampleGuardGuard', () => {
  let guard: SampleGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SampleGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
