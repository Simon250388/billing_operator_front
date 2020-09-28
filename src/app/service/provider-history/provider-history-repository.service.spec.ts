/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProviderHistoryRepositoryService } from './provider-history-repository.service';

describe('Service: ProviderHistoryRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProviderHistoryRepositoryService]
    });
  });

  it('should ...', inject([ProviderHistoryRepositoryService], (service: ProviderHistoryRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
