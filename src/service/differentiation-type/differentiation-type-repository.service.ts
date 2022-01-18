import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DifferentiationType } from 'src/store/models/differentiation-type';

@Injectable({
  providedIn: 'root'
})
export class DifferentiationTypeRepositoryService extends BaseRepositoryService<DifferentiationType>{
  protected apiDomain: string = 'differentiation-type';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
