import {MeterModel} from "../models/meter.model";

export interface IMeterState {
  items: { [key: string]: MeterModel }[] | undefined,
  current: string | undefined
}

export const initialMeterState: IMeterState = {
  items:  undefined,
  current: undefined
}

