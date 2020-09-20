import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Service } from 'src/app/model/service';


const TEST_DATA: Service[] = [
  {
    id: 1,
    present: 'Электроэнергия'
  },
  {
    id: 2,
    present: 'Холодная вода'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ServiceRepositoryService extends BaseRepositoryService<Service>{
  protected apiDomen: string = 'building';

  get(): Observable<Service[]> {
    return from([TEST_DATA]);
  }
}
