import {createReducer, on} from "@ngrx/store";
import {
  changeProviderInActiveAccountingPointAction,
  changeSelectedActiveAccountingPointAction,
  changeMeterValueInActiveAccountingPointAction,
  loadFromApiStartActionSuccessAction
} from "../action/accounting-point.action";
import {IAccountingPointActive} from "../models/accounting-point-active.model";
import {IAccountingPointActiveState, initialAccountingPointActiveState} from "../state/accounting-pointactive.state";

export const accountingPointReducer = createReducer(
  initialAccountingPointActiveState,
  on(loadFromApiStartActionSuccessAction, (state: IAccountingPointActiveState, payload: { items: IAccountingPointActive[] }) => {
    return {...state, items: payload.items};
  }),
  on(changeSelectedActiveAccountingPointAction, (state, current) => {
    return {...state, selected: current};
  }),
  on(changeProviderInActiveAccountingPointAction, (state, provider) => {

    let newSelected: IAccountingPointActive | undefined = undefined

    if (state.selected) {
      newSelected = {...state.selected, provider: provider}
    }

    const newItems = [...state.items];

    newItems[0] = {...state.items[0], provider: provider}

    return {
      ...state,
      selected: newSelected,
      items: newItems
    }
  }),
  on(changeMeterValueInActiveAccountingPointAction, (state, payload) => {

    let newSelected: IAccountingPointActive | undefined = undefined

    if (state.selected) {
      newSelected = {...state.selected, lastMeterValue: payload.value}
    }

    const newItems = [...state.items];

    newItems[0] = {...state.items[0], lastMeterValue: payload.value}

    return {
      ...state,
      selected: newSelected,
      items: newItems
    }
  })
)
