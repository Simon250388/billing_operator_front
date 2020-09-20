import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { DirectionOfUse } from 'src/app/model/direction-of-use';
import { DirectionOfUseRepositoryService } from './direction-of-use-repository.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionOfUseStoreService extends StoreService<DirectionOfUse, DirectionOfUseRepositoryService> implements IStoreService<DirectionOfUse> { 
  
  constructor(protected repository : DirectionOfUseRepositoryService) {
    super(repository);    
  }
}
