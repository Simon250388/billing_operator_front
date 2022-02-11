import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {ICommonState} from "../state/commom.state";

const commonState = (state: IAppState) => state.commonState;

export const getHttpRequestInProgress = createSelector(
  commonState,
  (state: ICommonState) => state.isHttpRequestStarted
)
