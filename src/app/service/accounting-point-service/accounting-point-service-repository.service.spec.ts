/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountingPointServiceRepositoryService } from './accounting-point-service-repository.service';

describe('Service: AccountingPointServiceRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingPointServiceRepositoryService]
    });
  });

  it('should ...', inject([AccountingPointServiceRepositoryService], (service: AccountingPointServiceRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
