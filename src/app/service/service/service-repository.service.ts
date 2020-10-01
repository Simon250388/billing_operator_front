import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Service } from 'src/app/model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceRepositoryService extends BaseRepositoryService<Service>{
  protected apiDomen: string = 'service';

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}
