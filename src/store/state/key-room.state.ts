import { IKeyRoom } from "../models/key-room.model";

export interface IKeyRoomState {
    items: IKeyRoom[],
    current: IKeyRoom | undefined
}

export const initialKeyRoomState: IKeyRoomState = {
    items: [],
    current: undefined
}
