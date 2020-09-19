import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from '../../base/repository.service';
import { Building } from '../../model/building';

const TEST_DATA: Building[] = [
  {
    id: 1,
    present: '624136, Свердловская обл, Новоуральск г, Ленина ул, дом № 115'
  },
  {
    id: 2,
    present: '624136, Свердловская обл, Новоуральск г, Ленина ул, дом № 138'
  }
];

@Injectable({
  providedIn: 'root'
})
export class BuildingRepositoryService extends BaseRepositoryService<Building>{
  protected apiDomen: string = 'building';

  get(): Observable<Building[]> {
    return from([TEST_DATA]);
  }
}




