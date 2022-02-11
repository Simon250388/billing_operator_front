import {createReducer, on} from "@ngrx/store";
import * as EntityActions from "../action/key-room.action";
import {IKeyRoom} from "../models/key-room.model";
import {IKeyRoomState, initialKeyRoomState} from "../state/key-room.state";

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
  })
)
