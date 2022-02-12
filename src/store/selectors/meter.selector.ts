import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IMeterState} from "../state/meter.state";

export const meterModuleState = createFeatureSelector<IMeterState>('meter-list');

export const getMeterByIdSelector = (id: string) => createSelector(
  meterModuleState,
  (state: IMeterState) => {
    if (!state.items) throw Error("asdasd")
    return state.items.get(id)!
  }
)

export const getMeterItems = createSelector(
  meterModuleState,
  (state: IMeterState) => {
    if (!state.items) return undefined
    if (!state.items.size || state.items.size == 0) return undefined
    return [...state.items.values()]
  }
)
