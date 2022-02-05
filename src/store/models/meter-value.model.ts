import {SimpleRef} from "./simple-ref.model";

export interface MeterValueModel {
  zone: SimpleRef;
  meterValue: number;
  avgVolume: number;
}
