/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SquareTypeStoreService } from './SquareTypeStore.service';

describe('Service: SquareTypeStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquareTypeStoreService]
    });
  });

  it('should ...', inject([SquareTypeStoreService], (service: SquareTypeStoreService) => {
    expect(service).toBeTruthy();
  }));
});
