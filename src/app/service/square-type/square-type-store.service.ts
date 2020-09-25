import { Injectable } from '@angular/core';
import { BaseCatalog } from 'src/app/base/base-catalog';
import { IStoreService, StoreService } from 'src/app/base/store.service';
import { SquareTypeRepositoryService } from './square-type-repository.service';

@Injectable({
  providedIn: 'root'
})
export class SquareTypeStoreService extends StoreService<BaseCatalog, SquareTypeRepositoryService> implements IStoreService<BaseCatalog> {
  constructor(
    protected repository: SquareTypeRepositoryService
  ) {
    super(repository);
  }
}
