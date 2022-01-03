import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { MeterHistory } from 'src/app/model/meter-history';

@Injectable({
  providedIn: 'root'
})
export class MeterHistoryRepositoryService extends BaseRepositoryService<MeterHistory>{
  protected apiDomen: string = 'meter-history';

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}