/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProviderHistoryStoreService } from './provider-history-store.service';

describe('Service: ProviderHistoryStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProviderHistoryStoreService]
    });
  });

  it('should ...', inject([ProviderHistoryStoreService], (service: ProviderHistoryStoreService) => {
    expect(service).toBeTruthy();
  }));
});
