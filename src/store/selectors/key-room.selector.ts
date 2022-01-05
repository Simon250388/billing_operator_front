import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IKeyRoomState } from "../state/key-room.state";


const keyRoomState = (state: IAppState) => state.keyRooms;

export const getHistory = createSelector(
    keyRoomState,
    (state: IKeyRoomState) => state.history
)

export const getCurrent = createSelector(
    keyRoomState,
    (state: IKeyRoomState) => state.current
)

export const getItems = createSelector(
    keyRoomState,
    (state: IKeyRoomState) => state.items
)