import {MeterModel} from "../models/meter.model";

export interface IMeterState {
  items: Map<String, MeterModel> | undefined,
  current: string | undefined
}

export const initialMeterState: IMeterState = {
  items:  undefined,
  current: undefined
}

