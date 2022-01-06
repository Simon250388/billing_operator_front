import { IKeyRoom } from "../models/key-room.model";

export interface IKeyRoomState {
    items: IKeyRoom[],
    history: IKeyRoom[],
    current: IKeyRoom | undefined
}

export const initialKeyRoomState: IKeyRoomState = {
    items: [],
    history: [],
    current: undefined
}