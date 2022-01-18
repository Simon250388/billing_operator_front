import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Environmenter} from 'ng-environmenter';
import {BaseRepositoryService} from 'src/app/base/repository.service';
import {SquareTypeRow} from 'src/store/models/square-type-row';

@Injectable({
  providedIn: 'root'
})
export class SquareTypeRowRepositoryService extends BaseRepositoryService<SquareTypeRow>{
  protected apiDomain: string = 'square-type-row';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
