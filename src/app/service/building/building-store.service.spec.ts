import { TestBed } from '@angular/core/testing';

import { BuildingStoreService } from './building-store.service';

describe('BuildingStoreService', () => {
  let service: BuildingStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
