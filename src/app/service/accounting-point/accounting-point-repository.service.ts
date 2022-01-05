import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { AccountingPoint } from 'src/store/models/accounting-point';

@Injectable({
  providedIn: 'root'
})
export class AccountingPointRepositoryService extends BaseRepositoryService<AccountingPoint>{
  protected apiDomen: string = 'accounting-point';

  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}
