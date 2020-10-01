import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DirectionOfUse } from 'src/app/model/direction-of-use';

@Injectable({
  providedIn: 'root'
})
export class DirectionOfUseRepositoryService extends BaseRepositoryService<DirectionOfUse>{
  protected apiDomen: string = 'direction-Of-use';

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}
