import { Injectable } from '@angular/core';
import { IStoreService, StoreService } from '../../base/store.service';
import { Building } from '../../model/building';
import { BuildingRepositoryService } from './building-repository.service';

@Injectable({
  providedIn: 'root'
})
export class BuildingStoreService extends StoreService<Building, BuildingRepositoryService> implements IStoreService<Building> { 
  
  constructor(protected repository : BuildingRepositoryService) {
    super(repository);    
  }
}

