import { Injectable } from '@angular/core';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { MeterValueHistory } from 'src/app/model/meter-value-history';

@Injectable({
  providedIn: 'root'
})
export class MeterValueHistoryRepositoryService extends BaseRepositoryService<MeterValueHistory>{
  protected apiDomen: string = 'meter-value-history';
}
