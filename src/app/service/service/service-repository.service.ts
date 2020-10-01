import { Injectable } from '@angular/core';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Service } from 'src/app/model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceRepositoryService extends BaseRepositoryService<Service>{
  protected apiDomen: string = 'service';
}
