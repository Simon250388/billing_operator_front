import { Injectable } from '@angular/core';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { ServiceImprovementTypeRateGroup } from 'src/app/model/service-improvement-type-rate-group';

@Injectable({
  providedIn: 'root'
})
export class ImprovementTypeRowRepositoryService extends BaseRepositoryService<ServiceImprovementTypeRateGroup>{
  protected apiDomen: string = 'service-improvement-type-rate-group';
}