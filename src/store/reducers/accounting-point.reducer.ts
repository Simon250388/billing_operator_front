import {createReducer, on} from "@ngrx/store";
import * as EntityActions from "../action/accounting-point.action";
import {IAccountingPointActive} from "../models/accounting-point-active.model";
import {IAccountingPointActiveState, initialAccountingPointActiveState} from "../state/accounting-pointactive.state";
import {finishChooseCurrenAction} from "../action/key-room.action";

export const accountingPointReducer = createReducer(
  initialAccountingPointActiveState,
  on(EntityActions.completeUpdateItemAction, (state: IAccountingPointActiveState, model: IAccountingPointActive) => {
    if (!state.items) {
      return {...state}
    }
    return {...state, items: updateObject(state.items, model)}
  }),
  on(EntityActions.successfulLoadItemsFromApiAction, (state: IAccountingPointActiveState, payload: { items: Map<String, IAccountingPointActive> }) => {
    return {...state, items: payload.items}
  }),
  on(finishChooseCurrenAction, () => {
    return initialAccountingPointActiveState
  })
)

const updateObject = (items: Map<String, IAccountingPointActive>, model: IAccountingPointActive) => {
  items.set(model.id, model)
  return items;
}
