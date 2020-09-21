import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { SquareTypeRow } from 'src/app/model/square-type-row';
import { SquareTypeStoreService } from '../square-type/square-type-store.service';
import { SquareTypeRowRepositoryService } from './square-type-row-repository.service';

@Injectable({
  providedIn: 'root'
})
export class SquareTypeRowStoreService extends StoreService<SquareTypeRow, SquareTypeRowRepositoryService> implements IStoreService<SquareTypeRow> {
  constructor(
    protected repository: SquareTypeRowRepositoryService,
    protected squareTypeStore: SquareTypeStoreService
  ) {
    super(repository);
  }

  squareTypePresent(id: number): string {
    return this.squareTypeStore.getPresent(id);
  }
}
