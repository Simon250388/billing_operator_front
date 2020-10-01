import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Provider } from 'src/app/model/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderRepositoryService extends BaseRepositoryService<Provider>{
  protected apiDomen: string = 'provider';

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}
