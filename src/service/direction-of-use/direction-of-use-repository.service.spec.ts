/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {DirectionOfUseRepositoryService} from './direction-of-use-repository.service';

describe('Service: DirectionOfUseRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectionOfUseRepositoryService]
    });
  });

  it('should ...', inject([DirectionOfUseRepositoryService], (service: DirectionOfUseRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
