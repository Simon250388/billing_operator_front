import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { MeterHistory } from 'src/app/model/meter-history';
import { MeterHistoryRepositoryService } from './meter-history-repository.service';

@Injectable({
  providedIn: 'root'
})
export class MeterHistoryStoreService extends StoreService<MeterHistory, MeterHistoryRepositoryService> implements IStoreService<MeterHistory> { 
  
  constructor(protected repository : MeterHistoryRepositoryService) {
    super(repository);    
  }

}
