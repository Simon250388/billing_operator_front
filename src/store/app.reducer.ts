import {routerReducer} from "@ngrx/router-store";
import {ActionReducerMap} from "@ngrx/store";
import {accountingPointReducer} from "./reducers/accounting-point.reducer";
import {KeyRoomReducer} from "./reducers/key-room.reducer";
import {simpleRefReducer} from "./reducers/simple-ref.reducer";
import {UserReducer} from "./reducers/user.reducer";
import {IAppState} from "./state/app.state";
import {simpleServiceReducer} from "./reducers/service-simple.reducer";



export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  accountingPoints: accountingPointReducer,
  user: UserReducer,
  keyRooms: KeyRoomReducer,
  simpleRefs: simpleRefReducer,
  simpleService: simpleServiceReducer
}
