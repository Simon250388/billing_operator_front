import {createAction, props} from "@ngrx/store";
import {IServiceSimpleModel} from "../models/service-simple.model";


enum EServiceSimpleAction {
  startServicesHttpRequest = "[Simple service] http request start",
  successServicesHttpRequest = "[Simple service] http request complete",
}

export const servicesHttpRequestStartAction = createAction(
  EServiceSimpleAction.startServicesHttpRequest,
  props<String>()
)


export const servicesHttpRequestSuccessAction = createAction(
  EServiceSimpleAction.successServicesHttpRequest,
  props<{ items: IServiceSimpleModel[] }>()
)
