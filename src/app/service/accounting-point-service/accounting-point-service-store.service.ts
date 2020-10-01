import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStoreService, StoreService } from 'src/app/base/store.service';
import { AccountingPointService } from 'src/app/model/accounting-point-service';
import { DirectionOfUseStoreService } from '../direction-of-use/direction-of-use-store.service';
import { ProviderStoreService } from '../provider/provider-store.service';
import { ServiceStoreService } from '../service/service-store.service';
import { AccountingPointServiceRepositoryService } from './accounting-point-service-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AccountingPointServiceStoreService extends StoreService<AccountingPointService, AccountingPointServiceRepositoryService> implements IStoreService<AccountingPointService> {

  constructor(
    protected repository: AccountingPointServiceRepositoryService,
    private serviceStore: ServiceStoreService,
    private providersStore: ProviderStoreService,
    private directionOfUseStore: DirectionOfUseStoreService
  ) {
    super(repository);
  }

  getServicePresent(serviceId: number): Observable<string> {
    return this.serviceStore.getPresent(serviceId);
  }

  getProviderPresent(providerId: number): Observable<string> {
    return this.providersStore.getPresent(providerId);
  }

  getDirectionOfUsePresent(directionOfuseId: number): Observable<string> {
    return this.directionOfUseStore.getPresent(directionOfuseId);
  }
}
