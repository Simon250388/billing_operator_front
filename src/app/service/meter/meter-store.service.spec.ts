/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeterStoreService } from './meter-store.service';

describe('Service: MeterStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeterStoreService]
    });
  });

  it('should ...', inject([MeterStoreService], (service: MeterStoreService) => {
    expect(service).toBeTruthy();
  }));
});
