import { TestBed, inject } from '@angular/core/testing';

import { BillSummaryServiceService } from './bill-summary-service.service';

describe('BillSummaryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillSummaryServiceService]
    });
  });

  it('should be created', inject([BillSummaryServiceService], (service: BillSummaryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
