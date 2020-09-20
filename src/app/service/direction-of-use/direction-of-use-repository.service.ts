import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DirectionOfUse } from 'src/app/model/direction-of-use';

const TEST_DATA: DirectionOfUse[] = [
  {
    id: 1,
    present: 'Направление использования 1'
  },
  {
    id: 2,
    present: 'Направление использования 2'
  }
];

@Injectable({
  providedIn: 'root'
})
export class DirectionOfUseRepositoryService extends BaseRepositoryService<DirectionOfUse>{
  protected apiDomen: string = 'directionOfUse';

  get(): Observable<DirectionOfUse[]> {
    return from([TEST_DATA]);
  }
}
