import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IMeterModuleState} from "../state/meter-module.state";
import {MeterModel} from "../models/meter.model";

export const meterModuleState = createFeatureSelector<IMeterModuleState>('meter-list');

export const getMeterByIdSelector = (id: string) => createSelector(
  meterModuleState,
  (state: IMeterModuleState) => {
    if (!state.meters.items) throw Error("asdasd")
    return state.meters.items[id]
  }
)

export const getMeterItems = createSelector(
  meterModuleState,
  (state: IMeterModuleState) => {
    if (!state.meters.items) return undefined

    return Object.keys(state.meters.items).map(value => state.meters.items!![value] as MeterModel)
  }
)
