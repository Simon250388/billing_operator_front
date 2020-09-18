/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeterValueHistoryRepositoryService } from './meter-value-history-repository.service';

describe('Service: MeterValueHistoryRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeterValueHistoryRepositoryService]
    });
  });

  it('should ...', inject([MeterValueHistoryRepositoryService], (service: MeterValueHistoryRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
