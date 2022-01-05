import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { AccountingPointService } from 'src/store/models/accounting-point-service';

@Injectable({
  providedIn: 'root'
})
export class AccountingPointServiceRepositoryService extends BaseRepositoryService<AccountingPointService>{
  protected apiDomen: string = 'building';  

  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}
