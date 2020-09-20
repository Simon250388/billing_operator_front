/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RateGroupStoreService } from './rate-group-store.service';

describe('Service: RateGroupStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateGroupStoreService]
    });
  });

  it('should ...', inject([RateGroupStoreService], (service: RateGroupStoreService) => {
    expect(service).toBeTruthy();
  }));
});
