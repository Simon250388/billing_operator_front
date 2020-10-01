import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from '../../base/repository.service';
import { Building } from '../../model/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingRepositoryService extends BaseRepositoryService<Building>{
  protected apiDomen: string = 'building';
  
  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}




