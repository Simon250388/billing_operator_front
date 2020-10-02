import { TestBed } from '@angular/core/testing';

import { BuildingRepositoryService } from './building-repository.service';

describe('BuildingRepositoryService', () => {
  let service: BuildingRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
