import {createReducer, on} from "@ngrx/store";
import {
  successfulCompleteDirectionOfUsesHttpRequestAction,
  successfulCompleteImprovementHttpRequestAction,
  successfulCompleteProvidesHttpRequestAction,
  successfulCompleteRateGroupsHttpRequestAction,
  successfulCompleteServicesHttpRequestAction
} from "../action/services.action";
import {SimpleRef} from "../models/simple-ref.model";
import {initialSimpleRefState, ISimpleRefState} from "../state/simple-ref.state";
import {UserLogoutAction} from "../action/user.action";

export const simpleRefReducer = createReducer(
  initialSimpleRefState,
  on(successfulCompleteServicesHttpRequestAction, (state: ISimpleRefState, payload: { items: SimpleRef[] }) => {
    return {
      ...state,
      services: payload.items
    }
  }),
  on(successfulCompleteImprovementHttpRequestAction, (state: ISimpleRefState, payload: { items: SimpleRef[] }) => {
    return {
      ...state,
      improvementTypes: payload.items
    }
  }),
  on(successfulCompleteProvidesHttpRequestAction, (state: ISimpleRefState, payload: { items: SimpleRef[] }) => {
    return {
      ...state,
      providers: payload.items
    }
  }),
  on(successfulCompleteRateGroupsHttpRequestAction, (state: ISimpleRefState, payload: { items: SimpleRef[] }) => {
    return {
      ...state,
      rateGroups: payload.items
    }
  }),
  on(successfulCompleteDirectionOfUsesHttpRequestAction, (state: ISimpleRefState, payload: { items: SimpleRef[] }) => {
    return {
      ...state,
      directionOfUses: payload.items
    }
  }),
  on(UserLogoutAction, () => {
    return initialSimpleRefState
  })
)
