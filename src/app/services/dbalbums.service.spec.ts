import { TestBed } from '@angular/core/testing';

import { DBAlbumsService } from './dbalbums.service';

describe('DBAlbumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBAlbumsService = TestBed.get(DBAlbumsService);
    expect(service).toBeTruthy();
  });
});
