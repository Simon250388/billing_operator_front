import {createAction} from "@ngrx/store";

export enum ECommonAction {
  startHttpRequest = "[Common] start http request",
  finishHttpRequest = "[Common] finish http request",
}

export const startHttpRequestAction = createAction(
  ECommonAction.startHttpRequest
)

export const finishHttpRequestAction = createAction(
  ECommonAction.finishHttpRequest
)
