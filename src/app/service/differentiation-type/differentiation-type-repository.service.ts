import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DifferentiationType } from 'src/app/model/differentiation-type';

const TEST_DATA: DifferentiationType[] = [
  {
    id: 1,
    present: 'Однотарифный'
  },
  {
    id: 2,
    present: 'Двухтарифный'
  }
];

@Injectable({
  providedIn: 'root'
})
export class DifferentiationTypeRepositoryService extends BaseRepositoryService<DifferentiationType>{
  protected apiDomen: string = 'differentiation-type';

  get(): Observable<DifferentiationType[]> {
    return from([TEST_DATA]);
  }

}
