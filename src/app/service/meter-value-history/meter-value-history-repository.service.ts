import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { MeterValueHistory } from 'src/store/models/meter-value-history';

@Injectable({
  providedIn: 'root'
})
export class MeterValueHistoryRepositoryService extends BaseRepositoryService<MeterValueHistory>{
  protected apiDomen: string = 'meter-value-history';
  
  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}
