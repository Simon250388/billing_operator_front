import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { ServiceImprovementTypeRateGroup } from 'src/app/model/service-improvement-type-rate-group';

@Injectable({
  providedIn: 'root'
})
export class ImprovementTypeRowRepositoryService extends BaseRepositoryService<ServiceImprovementTypeRateGroup>{
  protected apiDomen: string = 'service-improvement-type-rate-group';

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}