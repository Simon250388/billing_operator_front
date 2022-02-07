import {MeterModel} from "../models/meter.model";

export interface IMeterState {
  items: { [key: string]: MeterModel }[],
  current: string | undefined
}

export const initialMeterState: IMeterState = {
  items: [],
  current: undefined
}
