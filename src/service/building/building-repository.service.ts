import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from '../../app/base/repository.service';
import { Building } from '../../store/models/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingRepositoryService extends BaseRepositoryService<Building>{
  protected apiDomain: string = 'building';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}




