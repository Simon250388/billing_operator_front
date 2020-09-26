import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Meter } from 'src/app/model/meter';

const TEST_DATA: Meter[] = [
  {
    id: 1,
    present: '156156165'
  }
];

@Injectable({
  providedIn: 'root'
})
export class MeterRepositoryService extends BaseRepositoryService<Meter> {
  protected apiDomen: string = 'building';

  get(): Observable<Meter[]> {
    return from([TEST_DATA]);
  }

}
