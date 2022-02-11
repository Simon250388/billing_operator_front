import {RouterReducerState} from "@ngrx/router-store";
import {IKeyRoomState} from "./key-room.state";
import {ISimpleRefState} from "./simple-ref.state";
import {IUserState} from "./user.state";
import {ICommonState} from "./commom.state";

export interface IAppState {
  router?: RouterReducerState,
  commonState: ICommonState,
  user: IUserState,
  keyRooms: IKeyRoomState,
  simpleRefs: ISimpleRefState
}



