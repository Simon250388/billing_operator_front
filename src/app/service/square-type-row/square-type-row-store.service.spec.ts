/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SquareTypeRowStoreService } from './square-type-row-store.service';

describe('Service: SquareTypeRowStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquareTypeRowStoreService]
    });
  });

  it('should ...', inject([SquareTypeRowStoreService], (service: SquareTypeRowStoreService) => {
    expect(service).toBeTruthy();
  }));
});
