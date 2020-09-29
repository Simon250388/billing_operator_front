import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { MeterValueHistory } from 'src/app/model/meter-value-history';
import { MeterValueHistoryRepositoryService } from './meter-value-history-repository.service';

@Injectable({
  providedIn: 'root'
})
export class MeterValueHistoryStoreService extends StoreService<MeterValueHistory, MeterValueHistoryRepositoryService> implements IStoreService<MeterValueHistory> { 
  
  constructor(protected repository : MeterValueHistoryRepositoryService) {
    super(repository);    
  }
}
