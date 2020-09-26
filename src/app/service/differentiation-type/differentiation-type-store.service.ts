import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { DifferentiationType } from 'src/app/model/differentiation-type';
import { DifferentiationTypeRepositoryService } from './differentiation-type-repository.service';

@Injectable({
  providedIn: 'root'
})
export class DifferentiationTypeStoreService extends StoreService<DifferentiationType, DifferentiationTypeRepositoryService> implements IStoreService<DifferentiationType> { 
  
  constructor(protected repository : DifferentiationTypeRepositoryService) {
    super(repository);    
  }
}
