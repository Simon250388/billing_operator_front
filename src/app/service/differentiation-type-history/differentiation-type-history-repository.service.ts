import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DifferentiationTypeHistory } from 'src/store/models/differentiation-type-history';

@Injectable({
  providedIn: 'root'
})
export class DifferentiationTypeHistoryRepositoryService extends BaseRepositoryService<DifferentiationTypeHistory>{
  protected apiDomen: string = 'differentiation-type-history';

  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}
