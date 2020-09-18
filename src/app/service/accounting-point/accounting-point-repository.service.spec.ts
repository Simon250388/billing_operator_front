/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountingPointRepositoryService } from './accounting-point-repository.service';

describe('Service: AccountingPointRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingPointRepositoryService]
    });
  });

  it('should ...', inject([AccountingPointRepositoryService], (service: AccountingPointRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
