import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Service } from 'src/store/models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceRepositoryService extends BaseRepositoryService<Service>{
  protected apiDomain: string = 'service';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
