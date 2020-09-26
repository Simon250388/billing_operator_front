/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CutomerNavigationService } from './cutomer-navigation.service';

describe('Service: CutomerNavigation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CutomerNavigationService]
    });
  });

  it('should ...', inject([CutomerNavigationService], (service: CutomerNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
