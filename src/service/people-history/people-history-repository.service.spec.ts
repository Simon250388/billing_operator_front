/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {PeopleHistoryRepositoryService} from './people-history-repository.service';

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
