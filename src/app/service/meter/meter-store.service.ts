import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { Meter } from 'src/app/model/meter';
import { MeterRepositoryService } from './meter-repository.service';

@Injectable({
  providedIn: 'root'
})
export class MeterStoreService extends StoreService<Meter, MeterRepositoryService> implements IStoreService<Meter> { 
  
  constructor(protected repository : MeterRepositoryService) {
    super(repository);    
  }
}
