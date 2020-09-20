/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProviderStoreService } from './provider-store.service';

describe('Service: ProviderStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProviderStoreService]
    });
  });

  it('should ...', inject([ProviderStoreService], (service: ProviderStoreService) => {
    expect(service).toBeTruthy();
  }));
});
