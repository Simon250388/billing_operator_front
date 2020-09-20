import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { RateGroup } from 'src/app/model/rate-group';

const TEST_DATA: RateGroup[] = [
  {
    id: 1,
    present: 'Тарифная группа 1'
  },
  {
    id: 2,
    present: 'Тарифная группа 2'
  }
];

@Injectable({
  providedIn: 'root'
})
export class RateGroupRepositoryService extends BaseRepositoryService<RateGroup>{
  protected apiDomen: string = 'rate-group';

  get(): Observable<RateGroup[]> {
    return from([TEST_DATA]);
  }
}
