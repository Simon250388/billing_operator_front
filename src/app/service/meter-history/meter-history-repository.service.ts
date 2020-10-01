import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { MeterHistory } from 'src/app/model/meter-history';

@Injectable({
  providedIn: 'root'
})
export class MeterHistoryRepositoryService extends BaseRepositoryService<MeterHistory>{
  protected apiDomen: string = 'meter-history';
}
