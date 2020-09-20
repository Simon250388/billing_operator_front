import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Provider } from 'src/app/model/provider';
const TEST_DATA: Provider[] = [
  {
    id: 1,
    present: 'Поставщик 1'
  },
  {
    id: 2,
    present: 'Поставщик 2'
  }
];


@Injectable({
  providedIn: 'root'
})
export class ProviderRepositoryService extends BaseRepositoryService<Provider>{
  protected apiDomen: string = 'rate-group';

  get(): Observable<Provider[]> {
    return from([TEST_DATA]);
  }
}
