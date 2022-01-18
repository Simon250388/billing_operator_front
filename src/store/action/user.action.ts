import {Action, createAction, props} from "@ngrx/store";
import {IUser} from "../models/user.model";

enum EUserAction {
  UserTryLogin = "[User] try login",
  UserLoginSuccess = "[User] login success",
  UserLoginFail = "[User] login fail",
  UserLogout = "[User] logout"
}

export const UserTryLoginAction = createAction(
  EUserAction.UserTryLogin,
  props<{ userName: string, password: string }>()
)

export const UserLoginSuccessAction = createAction(
  EUserAction.UserLoginSuccess,
  props<IUser>()
)

export class UserLoginFailAction implements Action {
  readonly type: string = EUserAction.UserLoginFail;
}

export class UserLogoutAction implements Action {
  readonly type: string = EUserAction.UserLogout;
}
