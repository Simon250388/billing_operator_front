import {RouterReducerState} from "@ngrx/router-store";
import {IAccountingPointActiveState} from "./accounting-pointactive.state";
import {IKeyRoomState} from "./key-room.state";
import {ISimpleRefState} from "./simple-ref.state";
import {IUserState} from "./user.state";
import {IServiceSimpleState} from "./simple-service.state";

export interface IAppState {
  router?: RouterReducerState,
  accountingPoints: IAccountingPointActiveState,
  simpleService: IServiceSimpleState,
  user: IUserState,
  keyRooms: IKeyRoomState,
  simpleRefs: ISimpleRefState
}
