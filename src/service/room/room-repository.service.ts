import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Room } from 'src/store/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomRepositoryService extends BaseRepositoryService<Room>{
  protected apiDomain: string = 'room';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
