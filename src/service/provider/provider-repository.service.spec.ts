/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {ProviderRepositoryService} from './provider-repository.service';

describe('Service: ProviderRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProviderRepositoryService]
    });
  });

  it('should ...', inject([ProviderRepositoryService], (service: ProviderRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
