/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SquareTypeRowRepositoryService } from './square-type-row-repository.service';

describe('Service: SquareTypeRowRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquareTypeRowRepositoryService]
    });
  });

  it('should ...', inject([SquareTypeRowRepositoryService], (service: SquareTypeRowRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
