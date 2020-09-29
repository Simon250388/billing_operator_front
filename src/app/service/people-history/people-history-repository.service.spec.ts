/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeopleHistoryRepositoryService } from './people-history-repository.service';

describe('Service: PeopleHistoryRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleHistoryRepositoryService]
    });
  });

  it('should ...', inject([PeopleHistoryRepositoryService], (service: PeopleHistoryRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
