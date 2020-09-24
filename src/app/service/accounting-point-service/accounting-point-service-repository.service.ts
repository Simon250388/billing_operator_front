import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { AccountingPointService } from 'src/app/model/accounting-point-service';

const TEST_DATA : AccountingPointService[] = []

@Injectable({
  providedIn: 'root'
})
export class AccountingPointServiceRepositoryService extends BaseRepositoryService<AccountingPointService>{
  protected apiDomen: string = 'building';

  get(): Observable<AccountingPointService[]> {
    return from([TEST_DATA]);
  }
}