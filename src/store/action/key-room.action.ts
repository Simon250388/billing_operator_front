import {createAction, props} from "@ngrx/store";
import {IKeyRoom, IKeyRoomUpdateModel} from "../models/key-room.model";

export enum EKeyRoomActionAction {
  startLoadItemsFromApi = "[KeyRoom] start load items from api",
  successfulLoadItemsFromApi = "[KeyRoom] successful load items from api",

  finishChooseCurrent = "[KeyRoom] finish choose current",

  AddKeyRoomStart = "[KeyRoom] add new start",
  AddKeyRoomSuccess = "[KeyRoom] add new success",

  startUpdateItem = "[KeyRoom] start update item",
  completeUpdateItem = "[KeyRoom] complete update item"
}

export const startLoadItemsFromApiAction = createAction(
  EKeyRoomActionAction.startLoadItemsFromApi
);

export const successfulLoadItemsFromApiAction = createAction(
  EKeyRoomActionAction.successfulLoadItemsFromApi,
  props<{ items: Map<String, IKeyRoom> }>()
);


export const chooseCurrenAction = createAction(
  EKeyRoomActionAction.finishChooseCurrent,
  props<{ currentId: String }>()
);

export const addNewKeyRoomStartAction = createAction(
  EKeyRoomActionAction.AddKeyRoomStart,
  props<IKeyRoomUpdateModel>()
);

export const addNewKeyRoomSuccessAction = createAction(
  EKeyRoomActionAction.AddKeyRoomSuccess,
  props<IKeyRoom>()
);

export const startUpdateItemAction = createAction(
  EKeyRoomActionAction.startUpdateItem,
  props<IKeyRoomUpdateModel>()
);

export const completeUpdateItemAction = createAction(
  EKeyRoomActionAction.completeUpdateItem,
  props<IKeyRoom>()
);
