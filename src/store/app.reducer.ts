import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { accountingPointReducer } from "./reducers/accounting-point.reducer";
import { KeyRoomReducer } from "./reducers/key-room.reducer";
import { UserReducer } from "./reducers/user.reducer";
import { IAppState } from "./state/app.state";

export const appRedusers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    accountinPoints: accountingPointReducer,
    user: UserReducer,
    keyRooms: KeyRoomReducer
}