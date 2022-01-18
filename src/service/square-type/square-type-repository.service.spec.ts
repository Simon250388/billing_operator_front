/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {SquareTypeRepositoryService} from './square-type-repository.service';

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
