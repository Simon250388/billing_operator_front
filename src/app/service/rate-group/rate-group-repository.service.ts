import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { RateGroup } from 'src/store/models/rate-group';

@Injectable({
  providedIn: 'root'
})
export class RateGroupRepositoryService extends BaseRepositoryService<RateGroup>{
  protected apiDomen: string = 'rate-group';

  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}
