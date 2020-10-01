import { Injectable } from '@angular/core';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Meter } from 'src/app/model/meter';

@Injectable({
  providedIn: 'root'
})
export class MeterRepositoryService extends BaseRepositoryService<Meter> {
  protected apiDomen: string = 'meter';
}
