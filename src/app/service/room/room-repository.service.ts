import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Room } from 'src/app/model/room';


const TEST_DATA: Room[] = [
  {
    id: 1,
    present: '1',
    buildingId: 1
  },
  {
    id: 2,
    present: '2',
    buildingId: 1
  },
  {
    id: 3,
    present: '1',
    buildingId: 2
  },
  {
    id: 4,
    present: '2',
    buildingId: 2
  }
];

@Injectable({
  providedIn: 'root'
})
export class RoomRepositoryService extends BaseRepositoryService<Room>{
  protected apiDomen: string = 'building';

  get(): Observable<Room[]> {
    return from([TEST_DATA]);
  }
}
