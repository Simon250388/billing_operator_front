import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { SquareTypeRow } from 'src/store/models/square-type-row';

@Injectable({
  providedIn: 'root'
})
export class SquareTypeRowRepositoryService extends BaseRepositoryService<SquareTypeRow>{
  protected apiDomen: string = 'square-type-row';

  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}
