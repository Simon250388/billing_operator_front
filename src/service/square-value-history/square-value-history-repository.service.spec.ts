/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {SquareValueHistoryRepositoryService} from './square-value-history-repository.service';

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
