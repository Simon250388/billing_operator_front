/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerStoreService } from './customer-store.service';

describe('Service: SearchCustomerStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerStoreService]
    });
  });

  it('should ...', inject([CustomerStoreService], (service: CustomerStoreService) => {
    expect(service).toBeTruthy();
  }));
});
