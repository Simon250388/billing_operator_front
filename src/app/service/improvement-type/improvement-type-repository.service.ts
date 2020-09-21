import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { ImprovementType } from 'src/app/model/improvement-type';

const TEST_DATA: ImprovementType[] = [
  {
    id: 1,
    present: 'Вид благоустройства 1'
  },
  {
    id: 2,
    present: 'Вид благоустройства 2'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ImprovementTypeRepositoryService extends BaseRepositoryService<ImprovementType>{
  protected apiDomen: string = 'directionOfUse';

  get(): Observable<ImprovementType[]> {
    return from([TEST_DATA]);
  }
}
