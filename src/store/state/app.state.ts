import {RouterReducerState} from "@ngrx/router-store";
import {IKeyRoomState} from "./key-room.state";
import {ISimpleRefState} from "./simple-ref.state";
import {IUserState} from "./user.state";

export interface IAppState {
  router?: RouterReducerState,
  user: IUserState,
  keyRooms: IKeyRoomState,
  simpleRefs: ISimpleRefState
}