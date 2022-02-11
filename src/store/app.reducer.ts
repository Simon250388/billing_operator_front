import {routerReducer} from "@ngrx/router-store";
import {ActionReducerMap} from "@ngrx/store";
import {simpleRefReducer} from "./reducers/simple-ref.reducer";
import {UserReducer} from "./reducers/user.reducer";
import {IAppState} from "./state/app.state";


export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  user: UserReducer,
  simpleRefs: simpleRefReducer
}
