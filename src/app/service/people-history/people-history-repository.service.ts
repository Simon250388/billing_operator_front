import { Injectable } from '@angular/core';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { PeopleHistory } from 'src/app/model/people-history';

@Injectable({
  providedIn: 'root'
})
export class PeopleHistoryRepositoryService extends BaseRepositoryService<PeopleHistory>{
  protected apiDomen: string = 'people-history';
}
