/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DifferentiationTypeRepositoryService } from './differentiation-type-repository.service';

describe('Service: DifferentiationTypeRepository', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [DifferentiationTypeRepositoryService]
    });
  });

  it('should ...', inject([DifferentiationTypeRepositoryService], (service: DifferentiationTypeRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
