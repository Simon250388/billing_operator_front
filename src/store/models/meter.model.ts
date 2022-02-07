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



