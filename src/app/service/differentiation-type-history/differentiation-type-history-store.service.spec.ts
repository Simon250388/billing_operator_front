/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DifferentiationTypeHistoryStoreService } from './differentiation-type-history-store.service';

describe('Service: DifferentiationTypeHistoryStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DifferentiationTypeHistoryStoreService]
    });
  });

  it('should ...', inject([DifferentiationTypeHistoryStoreService], (service: DifferentiationTypeHistoryStoreService) => {
    expect(service).toBeTruthy();
  }));
});
