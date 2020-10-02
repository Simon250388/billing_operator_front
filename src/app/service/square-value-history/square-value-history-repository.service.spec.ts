/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SquareValueHistoryRepositoryService } from './square-value-history-repository.service';

describe('Service: SquareValueHistoryRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquareValueHistoryRepositoryService]
    });
  });

  it('should ...', inject([SquareValueHistoryRepositoryService], (service: SquareValueHistoryRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
