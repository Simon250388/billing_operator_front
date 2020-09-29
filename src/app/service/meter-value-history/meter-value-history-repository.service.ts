import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { MeterValueHistory } from 'src/app/model/meter-value-history';

const TEST_DATA: MeterValueHistory[] = [];

@Injectable({
  providedIn: 'root'
})
export class MeterValueHistoryRepositoryService extends BaseRepositoryService<MeterValueHistory>{
  protected apiDomen: string = 'meter-history';

  get(): Observable<MeterValueHistory[]> {
    return from([TEST_DATA]);
  }

}
