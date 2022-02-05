import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { MeterModel } from 'src/store/models/meter.model';

@Injectable({
  providedIn: 'root'
})
export class MeterRepositoryService extends BaseRepositoryService<MeterModel> {
  protected apiDomain: string = 'meter';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
