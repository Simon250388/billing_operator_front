import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DirectionOfUse } from 'src/store/models/direction-of-use';

@Injectable({
  providedIn: 'root'
})
export class DirectionOfUseRepositoryService extends BaseRepositoryService<DirectionOfUse>{
  protected apiDomen: string = 'direction-Of-use';

  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}
