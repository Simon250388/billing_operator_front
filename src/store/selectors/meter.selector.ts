import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IMeterModuleState} from "../state/meter-module.state";

export const meterModuleState = createFeatureSelector<IMeterModuleState>('meter-list');

export const getMeterByIdSelector = (id: string) => createSelector(
  meterModuleState,
  (state: IMeterModuleState) => {
    if (!state.meters.items) throw Error("asdasd")
    return state.meters.items.get(id)!
  }
)

export const getMeterItems = createSelector(
  meterModuleState,
  (state: IMeterModuleState) => {
    if (!state.meters.items) return undefined

    return [...state.meters.items.values()]
  }
)
