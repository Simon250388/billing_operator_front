import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Meter } from 'src/app/model/meter';

@Injectable({
  providedIn: 'root'
})
export class MeterRepositoryService extends BaseRepositoryService<Meter> {
  protected apiDomen: string = 'meter';

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}
