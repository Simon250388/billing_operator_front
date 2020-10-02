/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerRepositoryService } from './customer-repository.service';

describe('Service: CustomerRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerRepositoryService]
    });
  });

  it('should ...', inject([CustomerRepositoryService], (service: CustomerRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
