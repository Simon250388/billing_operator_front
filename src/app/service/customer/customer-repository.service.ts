import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Customer } from 'src/app/model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerRepositoryService extends BaseRepositoryService<Customer>{
  protected apiDomen: string = 'customer';
  
  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}
