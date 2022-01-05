import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from '../../base/repository.service';
import { Building } from '../../../store/models/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingRepositoryService extends BaseRepositoryService<Building>{
  protected apiDomen: string = 'building';
  
  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}




