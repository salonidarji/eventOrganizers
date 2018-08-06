import { TestBed, inject } from '@angular/core/testing';

import { CuisineService } from './cuisine.service';

describe('CuisineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuisineService]
    });
  });

  it('should be created', inject([CuisineService], (service: CuisineService) => {
    expect(service).toBeTruthy();
  }));
});
