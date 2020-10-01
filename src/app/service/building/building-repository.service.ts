import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from '../../base/repository.service';
import { Building } from '../../model/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingRepositoryService extends BaseRepositoryService<Building>{
  protected apiDomen: string = 'building';
}




