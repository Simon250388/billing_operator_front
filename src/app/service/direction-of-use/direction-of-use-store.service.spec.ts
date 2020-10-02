/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DirectionOfUseStoreService } from './direction-of-use-store.service';

describe('Service: DirectionOfUseStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectionOfUseStoreService]
    });
  });

  it('should ...', inject([DirectionOfUseStoreService], (service: DirectionOfUseStoreService) => {
    expect(service).toBeTruthy();
  }));
});
