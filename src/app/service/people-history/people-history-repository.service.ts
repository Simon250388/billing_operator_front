import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { PeopleHistory } from 'src/app/model/people-history';

@Injectable({
  providedIn: 'root'
})
export class PeopleHistoryRepositoryService extends BaseRepositoryService<PeopleHistory>{
  protected apiDomen: string = 'people-history';

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}
