import {SimpleRef} from "./simple-ref.model";
import {MeterValueModel} from "./meter-value.model";

export interface MeterModel {
  id: string,
  meterType: SimpleRef,
  verificationDate: string,
  meterValueDate: string,
  location: SimpleRef,
  differentiationType: SimpleRef,
  currentMeterValues: MeterValueModel[]
}

export interface MeterModelToUpdate {
  id: string,
  meterTypeId: string,
  verificationDate: string,
  meterValueDate: string,
  locationId: string,
  differentiationTypeId: string
}



