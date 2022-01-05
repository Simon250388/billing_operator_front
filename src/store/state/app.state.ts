import { RouterReducerState } from "@ngrx/router-store";
import { IAccountingPointActiveState } from "./accounting-pointactive.state";
import { IKeyRoomState } from "./key-room.state";
import { IUserState } from "./user.state";

export interface IAppState {
    router?: RouterReducerState,
    accountinPoints: IAccountingPointActiveState,
    user: IUserState,
    keyRooms: IKeyRoomState
}