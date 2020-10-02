/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeterHistoryRepositoryService } from './meter-history-repository.service';

describe('Service: MeterHistoryRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeterHistoryRepositoryService]
    });
  });

  it('should ...', inject([MeterHistoryRepositoryService], (service: MeterHistoryRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
