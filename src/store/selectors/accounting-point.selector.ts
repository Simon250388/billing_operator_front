import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAccountingPointActiveState} from "../state/accounting-pointactive.state";

export const accountingPointModuleState = createFeatureSelector<IAccountingPointActiveState>('accounting-points');

export const getAccountingPointByIdSelector = (id: string) => createSelector(
  accountingPointModuleState,
  (state: IAccountingPointActiveState) => {
    if (!state.items) throw Error("asdasd")
    return state.items.get(id)!
  }
)

export const getAccountingPointsItems = createSelector(
  accountingPointModuleState,
  (state: IAccountingPointActiveState) => {
    if (!state.items) return undefined
    if (!state.items.size || state.items.size == 0) return undefined
    return [...state.items.values()]
  }
)

export const getSimpleServiceItems = createSelector(
  accountingPointModuleState,
  (state: IAccountingPointActiveState) => {
    if (!state.simpleServices) return undefined
    if (!state.simpleServices.size || state.simpleServices.size == 0) return undefined
    return [...state.simpleServices.values()]
  }
)
