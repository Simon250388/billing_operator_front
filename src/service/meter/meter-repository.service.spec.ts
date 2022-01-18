/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {MeterRepositoryService} from './meter-repository.service';

describe('Service: MeterRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeterRepositoryService]
    });
  });

  it('should ...', inject([MeterRepositoryService], (service: MeterRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
