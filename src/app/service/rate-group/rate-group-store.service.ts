import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { RateGroup } from 'src/app/model/rate-group';
import { RateGroupRepositoryService } from './rate-group-repository.service';

@Injectable({
  providedIn: 'root'
})
export class RateGroupStoreService extends StoreService<RateGroup, RateGroupRepositoryService> implements IStoreService<RateGroup> { 
  
  constructor(protected repository : RateGroupRepositoryService) {
    super(repository);    
  }
}
