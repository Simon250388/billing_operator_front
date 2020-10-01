import { Injectable } from '@angular/core';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Provider } from 'src/app/model/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderRepositoryService extends BaseRepositoryService<Provider>{
  protected apiDomen: string = 'provider';
}
