import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { PeopleHistory } from 'src/app/model/people-history';

const TEST_DATA: PeopleHistory[] = [];

@Injectable({
  providedIn: 'root'
})
export class PeopleHistoryRepositoryService extends BaseRepositoryService<PeopleHistory>{
  protected apiDomen: string = 'people-history';

  get(): Observable<PeopleHistory[]> {
    return from([TEST_DATA]);
  }

}
