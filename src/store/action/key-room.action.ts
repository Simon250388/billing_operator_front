import { Action } from "@ngrx/store";
import { IKeyRoom } from "../models/key-room.model";

export enum EKeyRoomActionAction {
    StartSearch = "[KeyRoom] start search",
    ReceivdeResultSearchKeyRoom = "[KeyRoom] received search result",
    StartChooseCurrent = "[KeyRoom] start choose current",
    ChooseCurrentComplete = "[KeyRoom] choose current complete"
}

export class StartSearchKeyRoomAction implements Action {
    readonly type: string = EKeyRoomActionAction.StartSearch;
}

export class ReceivdeResultSearchKeyRoomAction implements Action {
    readonly type: string = EKeyRoomActionAction.ReceivdeResultSearchKeyRoom;
    constructor(public payload: { items: IKeyRoom[] }) { }
}

export class StartChooseCurrentAction implements Action {
    readonly type: string = EKeyRoomActionAction.StartChooseCurrent;
    constructor(public payload: { item: IKeyRoom }) { }
}

export class ChooseCurrentCompleteAction implements Action {
    readonly type: string = EKeyRoomActionAction.ChooseCurrentComplete;
    constructor(public payload: { item: IKeyRoom }) { }
}

export type KeyRoomActionActions = StartSearchKeyRoomAction | ReceivdeResultSearchKeyRoomAction
    | StartChooseCurrentAction | ChooseCurrentCompleteAction