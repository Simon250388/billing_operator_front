import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { Customer } from 'src/app/model/customer';

const TEST_DATA: Customer[] = [
  {
    id: 1,
    present: 'Иванов Иван Иванович',
    lsNumber: '12345678900',
    accountingPoint: [{
      accountingPointId: 1,
      serviceId: 1,
      providerId: 1,
      differentiationTypeId: 1,
      isActive: true,
      lastMeterValue: 5515156,
      meterId: 1,
      meterIsActive: true,
      meterStateChangeAt: '2020-01-01T00:00:00'
    },
    {
      accountingPointId: 1,
      serviceId: 1,
      providerId: 1,
      differentiationTypeId: 1,
      isActive: true,
      lastMeterValue: 5515156,
      meterId: 1,
      meterIsActive: true,
      meterStateChangeAt: '2020-01-01T00:00:00'
    }, {
      accountingPointId: 1,
      serviceId: 1,
      providerId: 1,
      differentiationTypeId: 1,
      isActive: true,
      lastMeterValue: 5515156,
      meterId: 1,
      meterIsActive: true,
      meterStateChangeAt: '2020-01-01T00:00:00'
    }, {
      accountingPointId: 1,
      serviceId: 1,
      providerId: 1,
      differentiationTypeId: 1,
      isActive: true,
      lastMeterValue: 5515156,
      meterId: 1,
      meterIsActive: true,
      meterStateChangeAt: '2020-01-01T00:00:00'
    }],
    address: '414000, г. Астрахань, ул. Кирова, д. 922 кв 8888',
    debt: 3500,
    isActive: false,
    stateChangeAt: '2020-01-02T00:00:00',
    countOwner: 1,
    countResident: 1,
    countPrescribed: 1,
    totalSquare: 50
  }
];

@Injectable({
  providedIn: 'root'
})
export class CustomerRepositoryService extends BaseRepositoryService<Customer>{
  protected apiDomen: string = 'customer';

  get(): Observable<Customer[]> {
    return from([TEST_DATA]);
  }
}
