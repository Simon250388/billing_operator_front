/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceStoreService } from './service-store.service';

describe('Service: ServiceStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceStoreService]
    });
  });

  it('should ...', inject([ServiceStoreService], (service: ServiceStoreService) => {
    expect(service).toBeTruthy();
  }));
});
