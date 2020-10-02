import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { ProviderHistory } from 'src/app/model/provider-history';
import { ProviderHistoryRepositoryService } from './provider-history-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderHistoryStoreService extends StoreService<ProviderHistory, ProviderHistoryRepositoryService> implements IStoreService<ProviderHistory> { 
  
  constructor(protected repository : ProviderHistoryRepositoryService) {
    super(repository);    
  }

  loadByAccountingPoint(accountigPointId: number) {
    
  }

}
