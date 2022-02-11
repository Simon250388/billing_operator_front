import {createReducer, on} from "@ngrx/store";
import {finishHttpRequestAction, startHttpRequestAction} from "../action/common.action";
import {ICommonState, initialCommonState} from "../state/commom.state";

export const commonReducer = createReducer(
  initialCommonState,
  on(startHttpRequestAction, (state: ICommonState) => {
    return {...state, isHttpRequestStarted: true};
  }),
  on(finishHttpRequestAction, (state: ICommonState) => {
    return {...state, isHttpRequestStarted: false};
  }),
)
