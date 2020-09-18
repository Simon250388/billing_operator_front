/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DifferentiationTypeStoreService } from './differentiation-type-store.service';

describe('Service: DifferentiationTypeStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DifferentiationTypeStoreService]
    });
  });

  it('should ...', inject([DifferentiationTypeStoreService], (service: DifferentiationTypeStoreService) => {
    expect(service).toBeTruthy();
  }));
});
