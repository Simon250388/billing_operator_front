import {Observable, of} from 'rxjs';
import {IMeterHttpService} from './meter.http.service.factory';
import {MeterModel, MeterModelToUpdate} from "../../store/models/meter.model";

export class MeterHttMockService implements IMeterHttpService {

  protected apiDomen: string = "";

  constructor() {}

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

  save(model: MeterModelToUpdate): Observable<MeterModel> {
    console.log("save MeterHttMockService")
    return of(mapToModel(model));
  }
}

export const mapToModel = (model: MeterModelToUpdate): MeterModel => {
  return {
    id: "someID",
    meterType: {
      id: model.meterTypeId,
      present: "132"
    },
    location: {
      id: model.locationId,
      present: "Кухня"
    },
    differentiationType: {
      id: model.differentiationTypeId,
      present: "3-х тарифный"
    },
    verificationDate: model.verificationDate,
    meterValueDate: model.meterValueDate,
    currentMeterValues: []
  }
}
