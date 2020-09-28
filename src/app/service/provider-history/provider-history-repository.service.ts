import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { ProviderHistory } from 'src/app/model/provider-history';

const TEST_DATA: ProviderHistory[] = [];

@Injectable({
  providedIn: 'root'
})
export class ProviderHistoryRepositoryService extends BaseRepositoryService<ProviderHistory>{
  protected apiDomen: string = 'provider-history';

  get(): Observable<ProviderHistory[]> {
    return from([TEST_DATA]);
  }

}
