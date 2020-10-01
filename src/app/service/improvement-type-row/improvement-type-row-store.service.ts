import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { ServiceImprovementTypeRateGroup } from 'src/app/model/service-improvement-type-rate-group';
import { ImprovementTypeStoreService } from '../improvement-type/improvement-type-store.service';
import { RateGroupStoreService } from '../rate-group/rate-group-store.service';
import { ServiceStoreService } from '../service/service-store.service';
import { ImprovementTypeRowRepositoryService } from './improvement-type-row-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ImprovementTypeRowStoreService extends StoreService<ServiceImprovementTypeRateGroup, ImprovementTypeRowRepositoryService> implements IStoreService<ServiceImprovementTypeRateGroup> { 
  
  constructor(
    protected repository : ImprovementTypeRowRepositoryService) {
    super(repository);    
  }
}
