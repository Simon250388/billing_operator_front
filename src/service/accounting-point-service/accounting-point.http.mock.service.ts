import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {
  IAccountingPointActive,
  IAccountingPointActiveToUpdateModel
} from 'src/store/models/accounting-point-active.model';
import {IAccountingPointHttpService} from './accounting-point.http.factory';

@Injectable({
  providedIn: 'root'
})
export class AccountingPointHttpMockService implements IAccountingPointHttpService {

  constructor() {
  }

  load(keyRoomId: string): Observable<IAccountingPointActive[]> {
    return of(
      [{
        id: "Кухня",
        service: {
          id: "somestring",
          present: "Холодная вода"
        },
        provider: {
          id: "somestring",
          present: "ООО Водоканал"
        },
        isActive: true,
        meter: {
          id: "somestring",
          present: "12555454/СГВ-15"
        },
        meterIsActive: true,
        meterStateChangeAt: "2022-15-30T12:00:00"
      }]
    ).pipe(
      delay(1500)
    );
  }

  save(model: IAccountingPointActiveToUpdateModel): Observable<IAccountingPointActive> {
    return of({
      id: model.id,
      service: {
        id: model.serviceId,
        present: "Холодная вода"
      },
      provider: {
        id: model.providerId,
        present: "ООО Водоканал"
      },
      isActive: true,
      meter: {
        id: "somestring",
        present: "12555454/СГВ-15"
      },
      meterIsActive: model.meterIsActive,
      meterStateChangeAt: model.meterStateChangeAt
    }).pipe(
      delay(1500)
    );
  }
}
