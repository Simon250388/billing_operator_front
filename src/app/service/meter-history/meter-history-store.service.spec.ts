/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeterHistoryStoreService } from './meter-history-store.service';

describe('Service: MeterHistoryStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeterHistoryStoreService]
    });
  });

  it('should ...', inject([MeterHistoryStoreService], (service: MeterHistoryStoreService) => {
    expect(service).toBeTruthy();
  }));
});
