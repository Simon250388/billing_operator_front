/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountingPointStoreService } from './accounting-point-store.service';

describe('Service: AccountingPointStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingPointStoreService]
    });
  });

  it('should ...', inject([AccountingPointStoreService], (service: AccountingPointStoreService) => {
    expect(service).toBeTruthy();
  }));
});
