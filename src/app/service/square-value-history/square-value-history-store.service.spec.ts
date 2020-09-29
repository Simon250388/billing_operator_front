/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SquareValueHistoryStoreService } from './square-value-history-store.service';

describe('Service: SquareValueHistoryStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquareValueHistoryStoreService]
    });
  });

  it('should ...', inject([SquareValueHistoryStoreService], (service: SquareValueHistoryStoreService) => {
    expect(service).toBeTruthy();
  }));
});
