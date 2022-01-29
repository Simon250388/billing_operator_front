import { createAction, props } from "@ngrx/store";
import { IKeyRoom } from "../models/key-room.model";
import {IKeyRoomAddModel} from "../models/key-room-add.model";

export enum EKeyRoomActionAction {
    StartSearch = "[KeyRoom] start search",
    ReceivedResultSearchKeyRoom = "[KeyRoom] received search result",
    StartChooseCurrent = "[KeyRoom] start choose current",
    ChooseCurrentComplete = "[KeyRoom] choose current complete",
    ClearCurrentComplete = "[KeyRoom] clear current",
    AddKeyRoomStart = "[KeyRoom] add new start",
    AddKeyRoomSuccess = "[KeyRoom] add new success"
}

export const startSearchKeyRoomAction = createAction(
    EKeyRoomActionAction.StartSearch
);

export const receiveResultSearchKeyRoomAction = createAction(
    EKeyRoomActionAction.ReceivedResultSearchKeyRoom,
    props<{ items: IKeyRoom[] }>()
);

export const startChooseCurrentAction = createAction(
    EKeyRoomActionAction.StartChooseCurrent,
    props<IKeyRoom>()
);

export const clearCurrentKeyRoomAction = createAction(
  EKeyRoomActionAction.ClearCurrentComplete,
);

export const chooseCurrentCompleteAction = createAction(
    EKeyRoomActionAction.ChooseCurrentComplete,
    props<IKeyRoom>()
);

export const addNewKeyRoomStartAction = createAction(
  EKeyRoomActionAction.AddKeyRoomStart,
  props<IKeyRoomAddModel>()
);

export const addNewKeyRoomSuccessAction = createAction(
  EKeyRoomActionAction.AddKeyRoomSuccess,
  props<IKeyRoom>()
);
