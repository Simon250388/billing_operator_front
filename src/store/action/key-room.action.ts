import { createAction, props } from "@ngrx/store";
import { IKeyRoom } from "../models/key-room.model";

export enum EKeyRoomActionAction {
    StartSearch = "[KeyRoom] start search",
    ReceivdeResultSearchKeyRoom = "[KeyRoom] received search result",
    StartChooseCurrent = "[KeyRoom] start choose current",
    ChooseCurrentComplete = "[KeyRoom] choose current complete"
}

export const startSearchKeyRoomAction = createAction(
    EKeyRoomActionAction.StartSearch
);

export const receiveResultSearchKeyRoomAction = createAction(
    EKeyRoomActionAction.ReceivdeResultSearchKeyRoom,
    props<{ items: IKeyRoom[] }>()
);

export const startChooseCurrentAction = createAction(
    EKeyRoomActionAction.StartChooseCurrent,
    props<IKeyRoom>()
);

export const chooseCurrentCompleteAction = createAction(
    EKeyRoomActionAction.ChooseCurrentComplete,
    props<IKeyRoom>()
);
