/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeterValueHistoryStoreService } from './meter-value-history-store.service';

describe('Service: MeterValueHistoryStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeterValueHistoryStoreService]
    });
  });

  it('should ...', inject([MeterValueHistoryStoreService], (service: MeterValueHistoryStoreService) => {
    expect(service).toBeTruthy();
  }));
});
