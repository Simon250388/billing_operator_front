import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { PeopleHistory } from 'src/store/models/people-history';

@Injectable({
  providedIn: 'root'
})
export class PeopleHistoryRepositoryService extends BaseRepositoryService<PeopleHistory>{
  protected apiDomen: string = 'people-history';

  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}
