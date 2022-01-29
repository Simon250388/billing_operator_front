/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {ImprovementTypeRepositoryService} from './improvement-type-repository.service';

describe('Service: ImprovementTypeRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImprovementTypeRepositoryService]
    });
  });

  it('should ...', inject([ImprovementTypeRepositoryService], (service: ImprovementTypeRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});