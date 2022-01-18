import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { MeterHistory } from 'src/store/models/meter-history';

@Injectable({
  providedIn: 'root'
})
export class MeterHistoryRepositoryService extends BaseRepositoryService<MeterHistory>{
  protected apiDomain: string = 'meter-history';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
