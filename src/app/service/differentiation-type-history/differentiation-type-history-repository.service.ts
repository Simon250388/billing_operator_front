import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DifferentiationTypeHistory } from 'src/app/model/differentiation-type-history';

const TEST_DATA: DifferentiationTypeHistory[] = [];

@Injectable({
  providedIn: 'root'
})
export class DifferentiationTypeHistoryRepositoryService extends BaseRepositoryService<DifferentiationTypeHistory>{
  protected apiDomen: string = 'differentiation-type-history';

  get(): Observable<DifferentiationTypeHistory[]> {
    return from([TEST_DATA]);
  }

}
