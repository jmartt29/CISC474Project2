import { TestBed, inject } from '@angular/core/testing';

import { OmdbserviceService } from './omdbservice.service';

describe('OmdbserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmdbserviceService]
    });
  });

  it('should be created', inject([OmdbserviceService], (service: OmdbserviceService) => {
    expect(service).toBeTruthy();
  }));
});
