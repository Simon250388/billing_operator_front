import {createReducer, on} from "@ngrx/store";
import * as EntityActions from "../action/key-room.action";
import * as AccountingPointActions from "../action/accounting-point.action";
import {IKeyRoom} from "../models/key-room.model";
import {IKeyRoomState, initialKeyRoomState} from "../state/key-room.state";
import {IAccountingPointActive} from "../models/accounting-point-active.model";

export const KeyRoomReducer = createReducer(
  initialKeyRoomState,
  on(EntityActions.chooseCurrentCompleteAction, (state: IKeyRoomState, keyRoom: IKeyRoom) => {
    return {...state, current: keyRoom}

  }),
  on(EntityActions.receiveResultSearchKeyRoomAction, (state: IKeyRoomState, payload: { items: IKeyRoom[] }) => {
    return {...state, items: [...payload.items]}
  }),

  on(EntityActions.clearCurrentKeyRoomAction, (state: IKeyRoomState) => {
    return {...state, current: undefined}
  }),
  on(EntityActions.addNewKeyRoomSuccessAction, (state: IKeyRoomState, keyRoom: IKeyRoom) => {
    let new_items = [...state.items];

    new_items.push(keyRoom)

    return {...state, items: new_items}
  }),
  on(AccountingPointActions.loadFromApiStartActionSuccessAction, (state: IKeyRoomState, payload: { items: IAccountingPointActive[] }) => {

    let items = state.items.map(value => {
      if (value.id == state.current?.id) {
        return {...value, accountingPoints: payload.items}
      }
      return value;
    })

    let current = {
      ...state.current,
      accountingPoints: payload.items,
      isAccountingPointLoad: true
    } as IKeyRoom

    return {...state, items: items, current: current}
  })
)
