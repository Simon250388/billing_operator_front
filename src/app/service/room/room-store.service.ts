import { Injectable } from '@angular/core';
import { IStoreService, StoreService } from 'src/app/base/store.service';
import { Room } from 'src/app/model/room';
import { BuildingRepositoryService } from '../building/building-repository.service';
import { RoomRepositoryService } from './room-repository.service';

@Injectable({
  providedIn: 'root'
})
export class RoomStoreService extends StoreService<Room, RoomRepositoryService> implements IStoreService<Room> {   
  constructor(protected repository : RoomRepositoryService) {
    super(repository);    
  }
}
