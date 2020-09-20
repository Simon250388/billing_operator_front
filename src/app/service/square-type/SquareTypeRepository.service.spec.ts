/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SquareTypeRepositoryService } from './SquareTypeRepository.service';

describe('Service: SquareTypeRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquareTypeRepositoryService]
    });
  });

  it('should ...', inject([SquareTypeRepositoryService], (service: SquareTypeRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
