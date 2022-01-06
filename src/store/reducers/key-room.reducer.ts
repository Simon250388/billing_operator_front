import { createReducer, on } from "@ngrx/store";
import { chooseCurrentCompleteAction, receivdeResultSearchKeyRoomAction } from "../action/key-room.action";
import { IKeyRoom } from "../models/key-room.model";
import { IKeyRoomState, initialKeyRoomState } from "../state/key-room.state";

export const KeyRoomReducer = createReducer(
    initialKeyRoomState,
    on(chooseCurrentCompleteAction, (state: IKeyRoomState, keyRoom: IKeyRoom) => {
        return { ...state, current: keyRoom }

    }),
    on(receivdeResultSearchKeyRoomAction, (state: IKeyRoomState, playload: { items: IKeyRoom[] }) => {
        return { ...state, items: [...playload.items] }
    })
)
