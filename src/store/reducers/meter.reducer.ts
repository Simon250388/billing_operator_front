import {createReducer, on} from "@ngrx/store";
import * as EntityActions from "../action/meter.action";
import {chooseCurrenAction} from "../action/key-room.action";
import {IMeterState, initialMeterState} from "../state/meter.state";
import {MeterModel} from "../models/meter.model";
import {UserLogoutAction} from "../action/user.action";

export const meterReducer = createReducer(
  initialMeterState,
  on(EntityActions.completeUpdateItemAction, (state: IMeterState, model: MeterModel) => {
    if (!state.items) {
      return {...state}
    }
    return {...state, items: updateObject(state.items, model)}
  }),
  on(EntityActions.successfulLoadMeterItemsFromApiAction, (state: IMeterState, payload: { items: Map<String, MeterModel> }) => {
    return {...state, items: payload.items}
  }),
  on(chooseCurrenAction, UserLogoutAction, () => {
    return initialMeterState
  })
)

const updateObject = (items: Map<String, MeterModel>, meterModel: MeterModel) => {
  items.set(meterModel.id, meterModel)
  return items;
}

