/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SideBarNavigationService } from './side-bar-navigation.service';

describe('Service: SideBarNavigation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideBarNavigationService]
    });
  });

  it('should ...', inject([SideBarNavigationService], (service: SideBarNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
