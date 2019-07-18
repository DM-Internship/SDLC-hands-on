import { TestBed } from '@angular/core/testing';

import { DBSingersService } from './dbsingers.service';

describe('DBSingersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBSingersService = TestBed.get(DBSingersService);
    expect(service).toBeTruthy();
  });
});
