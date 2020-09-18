/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountingPointServiceStoreService } from './accounting-point-service-store.service';

describe('Service: AccountingPointServiceStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingPointServiceStoreService]
    });
  });

  it('should ...', inject([AccountingPointServiceStoreService], (service: AccountingPointServiceStoreService) => {
    expect(service).toBeTruthy();
  }));
});
