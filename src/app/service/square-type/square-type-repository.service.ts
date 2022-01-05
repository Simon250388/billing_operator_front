import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseCatalog } from 'src/store/models/base-catalog';
import { BaseRepositoryService } from 'src/app/base/repository.service';

@Injectable({
  providedIn: 'root'
})
export class SquareTypeRepositoryService extends BaseRepositoryService<BaseCatalog>{
  protected apiDomen: string = 'square-type';

  constructor(
    protected override environmenter: Environmenter,
    protected override http: HttpClient) {
    super(environmenter, http);
  }
}