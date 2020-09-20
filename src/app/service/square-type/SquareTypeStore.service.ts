import { Injectable } from '@angular/core';
import { BaseEntity } from 'src/app/base/base-entity';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { SquareTypeRepositoryService } from './SquareTypeRepository.service';

@Injectable({
  providedIn: 'root'
})
export class SquareTypeStoreService extends StoreService<BaseEntity, SquareTypeRepositoryService> implements IStoreService<BaseEntity> {
  constructor(protected repository : SquareTypeRepositoryService) {
    super(repository);
  }
}
