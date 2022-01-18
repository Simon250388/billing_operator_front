/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {ServiceRepositoryService} from './service-repository.service';

describe('Service: ServiceRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceRepositoryService]
    });
  });

  it('should ...', inject([ServiceRepositoryService], (service: ServiceRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
