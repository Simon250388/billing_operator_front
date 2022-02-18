import {createAction, props} from "@ngrx/store";
import {ESocialProvider, IUser} from "../models/user.model";

enum EUserAction {
  UserTryLogin = "[User] try login",
  UserTryLoginSocialProvider = "[User] try login social provider",
  UserLoginSuccess = "[User] login success",
  UserLoginFail = "[User] login fail",
  UserLogout = "[User] logout",
  UserLogoutComplete = "[User] logout complete"
}

export const UserTryLoginAction = createAction(
  EUserAction.UserTryLogin,
  props<{ userName: string, password: string }>()
)

export const UserLoginSuccessAction = createAction(
  EUserAction.UserLoginSuccess,
  props<IUser>()
)

export const UserLoginFailAction = createAction(
  EUserAction.UserLoginFail
)

export const UserTryLoginSocialProviderAction = createAction(
  EUserAction.UserTryLoginSocialProvider,
  props<{ userName: string, token: string, providerType: ESocialProvider }>()
)

export const UserLogoutAction = createAction(
  EUserAction.UserLogout
)

export const UserLogoutCompleteAction = createAction(
  EUserAction.UserLogoutComplete
)


