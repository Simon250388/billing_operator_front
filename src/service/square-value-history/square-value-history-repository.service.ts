import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Environmenter} from 'ng-environmenter';
import {BaseRepositoryService} from 'src/app/base/repository.service';
import {SquareValueHistory} from 'src/store/models/square-value-history';

@Injectable({
  providedIn: 'root'
})
export class SquareValueHistoryRepositoryService extends BaseRepositoryService<SquareValueHistory> {
  protected apiDomain: string = 'square-value-history';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
