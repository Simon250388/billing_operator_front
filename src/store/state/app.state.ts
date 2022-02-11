import {RouterReducerState} from "@ngrx/router-store";
import {ISimpleRefState} from "./simple-ref.state";
import {IUserState} from "./user.state";

export interface IAppState {
  router?: RouterReducerState,
  user: IUserState,
  simpleRefs: ISimpleRefState
}



