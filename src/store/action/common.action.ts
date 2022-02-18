import {createAction} from "@ngrx/store";

export enum ECommonAction {
  empty = "[Common] empty"
}

export const emptyAction = createAction(
  ECommonAction.empty
)

