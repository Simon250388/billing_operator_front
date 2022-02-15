import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";

const routerState = (state: IAppState) => state;

export const getRouterState = createSelector(
  routerState,
  (appState: IAppState) => appState.router?.state
)

export const getRouterKeyRoomId = createSelector(
  getRouterState,
  (routerState) => routerState?.root.firstChild?.firstChild?.params
)




