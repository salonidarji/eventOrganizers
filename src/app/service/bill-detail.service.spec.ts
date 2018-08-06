import { TestBed, inject } from '@angular/core/testing';

import { BillDetailService } from './bill-detail.service';

describe('BillDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillDetailService]
    });
  });

  it('should be created', inject([BillDetailService], (service: BillDetailService) => {
    expect(service).toBeTruthy();
  }));
});
