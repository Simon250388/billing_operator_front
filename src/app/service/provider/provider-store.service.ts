import { Injectable } from '@angular/core';
import { IStoreService, StoreService } from 'src/app/base/store.service';
import { Provider } from 'src/app/model/provider';
import { ProviderRepositoryService } from './provider-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderStoreService extends StoreService<Provider, ProviderRepositoryService> implements IStoreService<Provider> { 
  
  constructor(protected repository : ProviderRepositoryService) {
    super(repository);    
  }
}
