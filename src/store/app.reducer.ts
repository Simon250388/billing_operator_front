import {routerReducer} from "@ngrx/router-store";
import {ActionReducerMap} from "@ngrx/store";
import {KeyRoomReducer} from "./reducers/key-room.reducer";
import {simpleRefReducer} from "./reducers/simple-ref.reducer";
import {UserReducer} from "./reducers/user.reducer";
import {IAppState} from "./state/app.state";
import {commonReducer} from "./reducers/common.reducer";


export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  user: UserReducer,
  keyRooms: KeyRoomReducer,
  simpleRefs: simpleRefReducer,
  commonState: commonReducer
}
