import {createReducer, on} from "@ngrx/store";
import * as EntityActions from "../action/key-room.action";
import {IKeyRoom} from "../models/key-room.model";
import {IKeyRoomState, initialKeyRoomState} from "../state/key-room.state";
import {UserLogoutAction} from "../action/user.action";

export const KeyRoomReducer = createReducer(
  initialKeyRoomState,
  on(EntityActions.chooseCurrenAction, (state: IKeyRoomState, payload : { currentId: String}) => {
    return {...state, currentId: payload.currentId}
  }),
  on(EntityActions.successfulLoadItemsFromApiAction, (state: IKeyRoomState, payload: { items: Map<String, IKeyRoom> }) => {
    return {...state, items: payload.items}
  }),
  on(EntityActions.addNewKeyRoomSuccessAction, (state: IKeyRoomState, model: IKeyRoom) => {
    if (!state.items) {
      return {...state}
    }
    const newItems = [...state.items.values(), model]

    return {...state, items: new Map(newItems.map(i => [i.id, i]))}
  }),
  on(EntityActions.completeUpdateItemAction, (state: IKeyRoomState, model: IKeyRoom) => {
    if (!state.items) {
      return {...state}
    }
    return {...state, items: updateObject(state.items, model)}
  }),
  on(UserLogoutAction, () => {
    return initialKeyRoomState
  })
)

const updateObject = (items: Map<String, IKeyRoom>, model: IKeyRoom) => {
  items.set(model.id, model)
  return items;
}


