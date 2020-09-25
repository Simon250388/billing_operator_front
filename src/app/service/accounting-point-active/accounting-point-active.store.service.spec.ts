/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountingPointActive.storeService } from './accounting-point-active.store.service';

describe('Service: AccountingPointActive.store', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountingPointActive.storeService]
    });
  });

  it('should ...', inject([AccountingPointActive.storeService], (service: AccountingPointActive.storeService) => {
    expect(service).toBeTruthy();
  }));
});
