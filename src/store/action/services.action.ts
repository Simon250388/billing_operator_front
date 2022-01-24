import {createAction, props} from "@ngrx/store";
import {SimpleRef} from "../models/simple-ref.model";

enum EServiceActions {
  StartServicesHttpRequest = "[SimpleRef] [Services] start http request",
  SuccessfulCompleteServicesHttpRequest = "[SimpleRef] [Services] successful complete http request",
  StartImprovementHttpRequest = "[SimpleRef] [Improvement] start http request",
  SuccessfulCompleteImprovementHttpRequest = "[SimpleRef] [Improvement] successful complete http request",
  StartProvidersHttpRequest = "[SimpleRef] [Providers] start http request",
  SuccessfulCompleteProvidersHttpRequest = "[Providers] [Improvement] successful complete http request",
  StartDirectionOfUsesHttpRequest = "[SimpleRef] [DirectionOfUse] start http request",
  SuccessfulCompleteDirectionOfUsesHttpRequest = "[Providers] [DirectionOfUse] successful complete http request",
  StartRateGroupsHttpRequest = "[SimpleRef] [RateGroups] start http request",
  SuccessfulCompleteRateGroupsHttpRequest = "[RateGroups] [DirectionOfUse] successful complete http request",
}

export const startServicesHttpRequestAction = createAction(
  EServiceActions.StartServicesHttpRequest,
)

export const successfulCompleteServicesHttpRequestAction = createAction(
  EServiceActions.SuccessfulCompleteServicesHttpRequest,
  props<{ items: SimpleRef[] }>()
)

export const startImprovementHttpRequestAction = createAction(
  EServiceActions.StartImprovementHttpRequest,
)

export const successfulCompleteImprovementHttpRequestAction = createAction(
  EServiceActions.SuccessfulCompleteImprovementHttpRequest,
  props<{ items: SimpleRef[] }>()
)

export const startProvidesHttpRequestAction = createAction(
  EServiceActions.StartProvidersHttpRequest,
)

export const successfulCompleteProvidesHttpRequestAction = createAction(
  EServiceActions.SuccessfulCompleteProvidersHttpRequest,
  props<{ items: SimpleRef[] }>()
)

export const startDirectionOfUsesHttpRequestAction = createAction(
  EServiceActions.StartDirectionOfUsesHttpRequest,
)

export const successfulCompleteDirectionOfUsesHttpRequestAction = createAction(
  EServiceActions.SuccessfulCompleteDirectionOfUsesHttpRequest,
  props<{ items: SimpleRef[] }>()
)

export const startRateGroupsHttpRequestAction = createAction(
  EServiceActions.StartRateGroupsHttpRequest,
)

export const successfulCompleteRateGroupsHttpRequestAction = createAction(
  EServiceActions.SuccessfulCompleteRateGroupsHttpRequest,
  props<{ items: SimpleRef[] }>()
)

