import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { ImprovementType } from 'src/app/model/improvement-type';
import { ImprovementTypeRepositoryService } from './improvement-type-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ImprovementTypeStoreService extends StoreService<ImprovementType, ImprovementTypeRepositoryService> implements IStoreService<ImprovementType> { 
  
  constructor(protected repository : ImprovementTypeRepositoryService) {
    super(repository);    
  }
}
