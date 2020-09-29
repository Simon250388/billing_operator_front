import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { SquareValueHistory } from 'src/app/model/square-value-history';

const TEST_DATA: SquareValueHistory[] = [];

@Injectable({
  providedIn: 'root'
})
export class SquareValueHistoryRepositoryService extends BaseRepositoryService<SquareValueHistory>{
  protected apiDomen: string = 'meter-history';

  get(): Observable<SquareValueHistory[]> {
    return from([TEST_DATA]);
  }
}
