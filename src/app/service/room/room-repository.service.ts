import { Injectable } from '@angular/core';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Room } from 'src/app/model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomRepositoryService extends BaseRepositoryService<Room>{
  protected apiDomen: string = 'room';
}
