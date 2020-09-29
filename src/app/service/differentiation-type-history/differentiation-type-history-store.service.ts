import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { DifferentiationTypeHistory } from 'src/app/model/differentiation-type-history';
import { DifferentiationTypeHistoryRepositoryService } from './differentiation-type-history-repository.service';

@Injectable({
  providedIn: 'root'
})
export class DifferentiationTypeHistoryStoreService extends StoreService<DifferentiationTypeHistory, DifferentiationTypeHistoryRepositoryService> implements IStoreService<DifferentiationTypeHistory> { 
  
  constructor(protected repository : DifferentiationTypeHistoryRepositoryService) {
    super(repository);    
  }

}
