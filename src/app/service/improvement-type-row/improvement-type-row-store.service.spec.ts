/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImprovementTypeRowStoreService } from './improvement-type-row-store.service';

describe('Service: ImprovementTypeStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImprovementTypeRowStoreService]
    });
  });

  it('should ...', inject([ImprovementTypeRowStoreService], (service: ImprovementTypeRowStoreService) => {
    expect(service).toBeTruthy();
  }));
});
