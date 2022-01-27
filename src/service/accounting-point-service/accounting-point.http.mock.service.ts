import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IAccountingPointActive} from 'src/store/models/accounting-point-active.model';
import {IAccountingPointHttpService} from './accounting-point.http.factory';

@Injectable({
  providedIn: 'root'
})
export class AccountingPointHttpMockService implements IAccountingPointHttpService {

  constructor(private http: HttpClient) {
  }

  load(keyRoomId: string): Observable<IAccountingPointActive[]> {
    return of(
      [{
        accountingPoint: {
          id: "somestring",
          present: "Кухня"
        },
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
        meterStateChangeAt: "2022-15-30T12:00:00",
        differentiationType: {
          id: "somestring",
          present: "somepresent"
        },
        lastMeterValue: 158,
        avgVolume: 0
      },
        {
          accountingPoint: {
            id: "somestring",
            present: "Кухня"
          },
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
          meterStateChangeAt: "2022-15-30T12:00:00",
          differentiationType: {
            id: "somestring",
            present: "somepresent"
          },
          lastMeterValue: 158,
          avgVolume: 10
        },
        {
          accountingPoint: {
            id: "somestring",
            present: "Кухня"
          },
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
          meterStateChangeAt: "2022-15-30T12:00:00",
          differentiationType: {
            id: "somestring",
            present: "somepresent"
          },
          lastMeterValue: 158,
          avgVolume: 15
        },
        {
          accountingPoint: {
            id: "somestring",
            present: "Кухня"
          },
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
          meterStateChangeAt: "2022-15-30T12:00:00",
          differentiationType: {
            id: "somestring",
            present: "somepresent"
          },
          lastMeterValue: 158,
          avgVolume: 20
        },
        {
          accountingPoint: {
            id: "somestring",
            present: "Кухня"
          },
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
          meterStateChangeAt: "2022-15-30T12:00:00",
          differentiationType: {
            id: "somestring",
            present: "somepresent"
          },
          lastMeterValue: 158,
          avgVolume: 25
        },
        {
          accountingPoint: {
            id: "somestring",
            present: "Кухня"
          },
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
          meterStateChangeAt: "2022-15-30T12:00:00",
          differentiationType: {
            id: "somestring",
            present: "somepresent"
          },
          lastMeterValue: 158,
          avgVolume: 35
        }]
    );
  }
}
