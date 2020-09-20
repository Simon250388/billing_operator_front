import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseEntity } from 'src/app/base/base-entity';
import { BaseRepositoryService } from 'src/app/base/repository.service';

const TEST_DATA: BaseEntity[] = [
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
export class SquareTypeRepositoryService extends BaseRepositoryService<BaseEntity>{
  protected apiDomen: string = 'square-type';

  get(): Observable<BaseEntity[]> {
    return from([TEST_DATA]);
  }
}
