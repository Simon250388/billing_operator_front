import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { SquareValueHistory } from 'src/store/models/square-value-history';

@Injectable({
  providedIn: 'root'
})
export class SquareValueHistoryRepositoryService extends BaseRepositoryService<SquareValueHistory>{
  protected apiDomen: string = 'square-value-history';

  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}
