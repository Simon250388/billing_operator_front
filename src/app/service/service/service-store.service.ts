import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { Service } from 'src/app/model/service';
import { ServiceRepositoryService } from './service-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceStoreService extends StoreService<Service, ServiceRepositoryService> implements IStoreService<Service> { 
  
  constructor(protected repository : ServiceRepositoryService) {
    super(repository);    
  }
}
