import {SimpleRef} from "./simple-ref.model";
import {MeterValueModel} from "./meter-value.model";

export interface MeterModel {
  id: string
  type: SimpleRef
  verificationDate: string
  meterValueDate: string
  location: SimpleRef
  differentiationType: SimpleRef,
  currentMeterValues: MeterValueModel[]
}


export const meterPropertyTranslations: { [key: string]: string } = {
  "type": "Тип",
  "verificationDate": "Дата поверки",
  "location": "Место установки",
  "differentiationType": "Диффир-ть",
  "meterValueDate": "Дата показаний",
}

export const meterPropertyPresent: { [key: string]: (model: MeterModel) => string } = {
  "type": (model) => model.type.present,
  "verificationDate": (model) => model.verificationDate,
  "location": (model) => model.location.present,
  "differentiationType": (model) => model.differentiationType.present,
  "meterValueDate": (model) => model.meterValueDate,
}
