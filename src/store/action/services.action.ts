import {createAction, props} from "@ngrx/store";
import {SimpleRef} from "../models/simple-ref.model";

enum EServiceActions {
  StartServicesHttpRequest = "[Services] start http request",
  SuccessfulCompleteServicesHttpRequest = "[Services] successful complete http request"
}

export const startServicesHttpRequestAction = createAction(
  EServiceActions.StartServicesHttpRequest,
)

export const successfulCompleteServicesHttpRequestAction = createAction(
  EServiceActions.SuccessfulCompleteServicesHttpRequest,
  props<{ items: SimpleRef[] }>()
)
