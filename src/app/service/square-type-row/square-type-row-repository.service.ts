import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseEntity } from 'src/app/base/base-entity';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { SquareTypeRow } from 'src/app/model/square-type-row';

const TEST_DATA: SquareTypeRow[] = [
  {
    id: 1,
    value: 50,
  }
];

@Injectable({
  providedIn: 'root'
})
export class SquareTypeRowRepositoryService extends BaseRepositoryService<SquareTypeRow>{
  protected apiDomen: string = 'square-type-row';

  get(): Observable<SquareTypeRow[]> {
    return from([TEST_DATA]);
  }
}
