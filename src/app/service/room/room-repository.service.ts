import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Room } from 'src/app/model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomRepositoryService extends BaseRepositoryService<Room>{
  protected apiDomen: string = 'room';

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}
