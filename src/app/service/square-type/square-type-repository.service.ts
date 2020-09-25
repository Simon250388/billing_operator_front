import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BaseCatalog } from 'src/app/base/base-catalog';
import { BaseRepositoryService } from 'src/app/base/repository.service';

const TEST_DATA: BaseCatalog[] = [
  {
    id: 1,
    present: 'Общая площадь помещения',
  },
  {
    id: 2,
    present: 'Жилая площадь помещения',
  },
  {
    id: 3,
    present: 'Поливная площадь',
  },
  {
    id: 4,
    present: 'Площадь земельного участка',
  }
];

@Injectable({
  providedIn: 'root'
})
export class SquareTypeRepositoryService extends BaseRepositoryService<BaseCatalog>{
  protected apiDomen: string = 'square-type-row';

  get(): Observable<BaseCatalog[]> {
    return from([TEST_DATA]);
  }
}