/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImprovementTypeRowRepositoryService } from './improvement-type-row-repository.service';

describe('Service: ImprovementTypeRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImprovementTypeRowRepositoryService]
    });
  });

  it('should ...', inject([ImprovementTypeRowRepositoryService], (service: ImprovementTypeRowRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
