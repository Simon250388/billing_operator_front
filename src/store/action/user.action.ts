import { Action } from "@ngrx/store";
import { IUser } from "../models/user.model";

export enum EUserAction {
    UserTryLogin = "[User] try login",
    UserLoginSuccess = "[User] login success",
    UserLoginFail = "[User] login fail",
    UserLogout = "[User] logout"
}

export class UserTryLoginAction implements Action {
    readonly type: string = EUserAction.UserTryLogin;
}

export class UserLoginSuccessAction implements Action {
    readonly type: string = EUserAction.UserLoginSuccess;
    constructor(public payload: { user: IUser }) { }
}

export class UserLoginFailAction implements Action {
    readonly type: string = EUserAction.UserLoginFail;
}

export class UserLogoutAction implements Action {
    readonly type: string = EUserAction.UserLogout;
}

export type UserActions = UserTryLoginAction | UserLoginSuccessAction | UserLoginFailAction | UserLogoutAction;