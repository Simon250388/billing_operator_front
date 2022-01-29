import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { ProviderHistory } from 'src/store/models/provider-history';

@Injectable({
  providedIn: 'root'
})
export class ProviderHistoryRepositoryService extends BaseRepositoryService<ProviderHistory>{
  protected apiDomain: string = 'provider-history';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}