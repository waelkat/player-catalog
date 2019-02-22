import { TestBed } from '@angular/core/testing';

import { PalyerService } from './palyer.service';

describe('PalyerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalyerService = TestBed.get(PalyerService);
    expect(service).toBeTruthy();
  });
});
