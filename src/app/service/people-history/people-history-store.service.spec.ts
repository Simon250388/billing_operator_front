/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeopleHistoryStoreService } from './people-history-store.service';

describe('Service: PeopleHistoryStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleHistoryStoreService]
    });
  });

  it('should ...', inject([PeopleHistoryStoreService], (service: PeopleHistoryStoreService) => {
    expect(service).toBeTruthy();
  }));
});
