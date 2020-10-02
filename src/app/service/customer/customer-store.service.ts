import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { Customer } from 'src/app/model/customer';
import { CustomerRepositoryService } from './customer-repository.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerStoreService extends StoreService<Customer, CustomerRepositoryService> implements IStoreService<Customer> {   
  constructor(protected repository : CustomerRepositoryService) {
    super(repository);    
  }
}
