import {MeterModel} from "../models/meter.model";

export interface IMeterState {
  items: Map<String, MeterModel> | undefined
}

export const initialMeterState: IMeterState = {
  items:  undefined
}

