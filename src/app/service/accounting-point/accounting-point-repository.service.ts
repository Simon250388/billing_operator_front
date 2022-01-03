import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { AccountingPoint } from 'src/app/model/accounting-point';

@Injectable({
  providedIn: 'root'
})
export class AccountingPointRepositoryService extends BaseRepositoryService<AccountingPoint>{
  protected apiDomen: string = 'accounting-point';

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}