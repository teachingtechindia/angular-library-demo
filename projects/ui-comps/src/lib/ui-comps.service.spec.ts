import { TestBed } from '@angular/core/testing';

import { UiCompsService } from './ui-comps.service';

describe('UiCompsService', () => {
  let service: UiCompsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiCompsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
