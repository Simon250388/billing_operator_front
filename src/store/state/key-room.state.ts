import {IKeyRoom} from "../models/key-room.model";

export interface IKeyRoomState {
  items: Map<String, IKeyRoom> | undefined,
  currentId: String | undefined
}

export const initialKeyRoomState: IKeyRoomState = {
  items: undefined,
  currentId: undefined
}
