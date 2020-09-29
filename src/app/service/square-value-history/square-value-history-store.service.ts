import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { SquareValueHistory } from 'src/app/model/square-value-history';
import { SquareValueHistoryRepositoryService } from './square-value-history-repository.service';

@Injectable({
  providedIn: 'root'
})
export class SquareValueHistoryStoreService extends StoreService<SquareValueHistory, SquareValueHistoryRepositoryService> implements IStoreService<SquareValueHistory> { 
  
  constructor(protected repository : SquareValueHistoryRepositoryService) {
    super(repository);    
  }

}
