import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { ImprovementType } from 'src/app/model/improvement-type';
import { ServiceImprovementTypeRateGroup } from 'src/app/model/service-improvement-type-rate-group';


const TEST_DATA: ServiceImprovementTypeRateGroup[] = [];

@Injectable({
  providedIn: 'root'
})
export class ImprovementTypeRowRepositoryService extends BaseRepositoryService<ServiceImprovementTypeRateGroup>{
  protected apiDomen: string = 'building';

  get(): Observable<ServiceImprovementTypeRateGroup[]> {
    return from([TEST_DATA]);
  }
}