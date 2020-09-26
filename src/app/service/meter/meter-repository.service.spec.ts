/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeterRepositoryService } from './meter-repository.service';

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
