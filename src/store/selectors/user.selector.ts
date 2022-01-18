import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IUserState} from "../state/user.state";

const userState = (state: IAppState) => state.user;


export const getCurrentUser = createSelector(
  userState,
  (state: IUserState) => state.current
)
