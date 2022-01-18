import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DirectionOfUse } from 'src/store/models/direction-of-use';

@Injectable({
  providedIn: 'root'
})
export class DirectionOfUseRepositoryService extends BaseRepositoryService<DirectionOfUse>{
  protected apiDomain: string = 'direction-Of-use';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
