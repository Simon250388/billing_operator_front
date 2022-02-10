import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IMeterHttpService} from './meter.http.service.factory';
import {MeterModel} from "../../store/models/meter.model";

export class MeterHttMockService implements IMeterHttpService {

  protected apiDomen: string = "";

  constructor(private http: HttpClient) {
  }

  load(): Observable<MeterModel[]> {
    return of([
        {
          id: "someID",
          meterType: {
            id: "someId",
            present: "132"
          },
          location: {
            id: "someId",
            present: "Кухня"
          },
          differentiationType: {
            id: "SomeId",
            present: "3-х тарифный"
          },
          verificationDate: "01-01-2021",
          meterValueDate: "01-01-2021",
          currentMeterValues: [
            {zone: {id: "SOMEID", present: "Ночь"}, meterValue: 137580, avgVolume: 1000},
            {zone: {id: "SOMEID", present: "Полупик"}, meterValue: 137580, avgVolume: 1000},
            {zone: {id: "SOMEID", present: "Пик"}, meterValue: 137580, avgVolume: 1000}
          ]
        }
    ])
  }

  save(model: MeterModel): Observable<MeterModel> {
    return of(model);
  }

  put(model: MeterModel, property: String, value: any): Observable<MeterModel> {
    console.log(`
    MeterHttMockService.patch is work
    model: ${JSON.stringify(model)}
    property: ${JSON.stringify(property)}
    value: ${JSON.stringify(value)}`)
    return of(model);
  }

}
