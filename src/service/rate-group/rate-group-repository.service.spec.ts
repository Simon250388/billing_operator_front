/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {RateGroupRepositoryService} from './rate-group-repository.service';

describe('Service: RateGroupRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateGroupRepositoryService]
    });
  });

  it('should ...', inject([RateGroupRepositoryService], (service: RateGroupRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
