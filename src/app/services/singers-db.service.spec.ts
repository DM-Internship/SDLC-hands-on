import { TestBed } from '@angular/core/testing';

import { SingersDBService } from './singers-db.service';

describe('SingersDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingersDBService = TestBed.get(SingersDBService);
    expect(service).toBeTruthy();
  });
});
