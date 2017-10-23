import { TestBed, inject } from '@angular/core/testing';

import { OmdbService } from './omdb.service';

describe('OmdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbService]
    });
  });

  it('should be created', inject([OmdbService], (service: OmdbService) => {
    expect(service).toBeTruthy();
  }));
});
