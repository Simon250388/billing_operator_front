import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { AccountingPoint } from 'src/app/model/accounting-point';

const TEST_DATA: AccountingPoint[] = [
  {
    id: 1,
    present: 'Кухня'
  },
  {
    id: 2,
    present: 'Ванная'
  }
];

@Injectable({
  providedIn: 'root'
})
export class AccountingPointRepositoryService extends BaseRepositoryService<AccountingPoint>{
  protected apiDomen: string = 'accounting-point';

  get(): Observable<AccountingPoint[]> {
    return from([TEST_DATA]);
  }
}
