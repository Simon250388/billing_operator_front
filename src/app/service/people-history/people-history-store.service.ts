import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { PeopleHistory } from 'src/app/model/people-history';
import { PeopleHistoryRepositoryService } from './people-history-repository.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleHistoryStoreService extends StoreService<PeopleHistory, PeopleHistoryRepositoryService> implements IStoreService<PeopleHistory> { 
  
  constructor(protected repository : PeopleHistoryRepositoryService) {
    super(repository);    
  }

}
