import {createReducer, on} from "@ngrx/store";
import * as EntityActions from "../action/meter.action";
import {IMeterState, initialMeterState} from "../state/meter.state";
import {MeterModel} from "../models/meter.model";

export const MeterReducer = createReducer(
  initialMeterState,
  on(EntityActions.updateItemAction, (state: IMeterState, payload: MeterModel) => {
    console.log(`State changed ${JSON.stringify(payload)}`)
    return {...state}
  }),
  on(EntityActions.successfulLoadMeterItemsFromApiAction, (state: IMeterState, payload: { items: MeterModel[] }) => {

    const result: { [key: string]: MeterModel }[] = [];

    payload.items.map(item => result[item.id] = item)

    return {...state, items: result}
  })
)
