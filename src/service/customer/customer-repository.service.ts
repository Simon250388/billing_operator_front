import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Customer } from 'src/store/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerRepositoryService extends BaseRepositoryService<Customer>{
  protected apiDomain: string = 'customer';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
