import { Injectable } from '@angular/core';
import { StoreService, IStoreService } from 'src/app/base/store.service';
import { AccountingPoint } from 'src/app/model/accounting-point';
import { AccountingPointRepositoryService } from './accounting-point-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AccountingPointStoreService extends StoreService<AccountingPoint, AccountingPointRepositoryService> implements IStoreService<AccountingPoint> {

  constructor(protected repository: AccountingPointRepositoryService) {
    super(repository);
  }

}
