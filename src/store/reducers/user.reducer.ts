import * as EntityAction from "../action/user.action";
import {initialUserState, IUserState} from "../state/user.state";
import {createReducer, on} from "@ngrx/store";
import {IUser} from "../models/user.model";

export const UserReducer = createReducer(
  initialUserState,
  on(EntityAction.UserLoginSuccessAction, (state: IUserState, currentUser: IUser) => {
    return {
      ...state,
      current: currentUser
    }
  }),
  on(EntityAction.UserLogoutCompleteAction, (state: IUserState) => {
    return {
      ...state,
      current: undefined
    }
  })
)
