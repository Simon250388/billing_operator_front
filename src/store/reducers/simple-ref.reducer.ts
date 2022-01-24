import {createReducer, on} from "@ngrx/store";
import {
  successfulCompleteImprovementHttpRequestAction,
  successfulCompleteProvidesHttpRequestAction,
  successfulCompleteRateGroupsHttpRequestAction,
  successfulCompleteServicesHttpRequestAction
} from "../action/services.action";
import {SimpleRef} from "../models/simple-ref.model";
import {initialSimpleRefState, ISimpleRefState} from "../state/simple-ref.state";

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
  })
)
