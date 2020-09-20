/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImprovementTypeStoreService } from './improvement-type-store.service';

describe('Service: ImprovementTypeStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImprovementTypeStoreService]
    });
  });

  it('should ...', inject([ImprovementTypeStoreService], (service: ImprovementTypeStoreService) => {
    expect(service).toBeTruthy();
  }));
});
