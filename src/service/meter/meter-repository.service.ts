import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Meter } from 'src/store/models/meter';

@Injectable({
  providedIn: 'root'
})
export class MeterRepositoryService extends BaseRepositoryService<Meter> {
  protected apiDomain: string = 'meter';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
