import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {ISimpleRefState} from "../state/simple-ref.state";
import {SimpleRef} from "../models/simple-ref.model";

const simpleRefStates = (state: IAppState) => state.simpleRefs;

export const servicesSimpleRefSelector = createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.services
  }
)

export const serviceSimpleRefPresentSelector = (id: string) => createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.services.find(value => value.id == id)?.present || ""
  }
)

export const improvementSimpleRefSelector = createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.improvementTypes
  }
)

export const improvementSimpleRefPresentSelector = (id: string) => createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.improvementTypes.find(value => value.id == id)?.present || ""
  }
)

export const providerSimpleRefSelector = createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.providers
  }
)

export const providerSimpleRefPresentSelector = (id: string) => createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.providers.find(value => value.id == id)?.present || ""
  }
)

export const directionOfUseSimpleRefSelector = createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.directionOfUses
  }
)

export const directionOfUseSimpleRefPresentSelector = (id: string) => createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.directionOfUses.find(value => value.id == id)?.present || ""
  }
)

export const rateGroupSimpleRefSelector = createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.rateGroups
  }
)

export const rateGroupSimpleRefPresentSelector = (id: string) => createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.rateGroups.find(value => value.id == id)?.present || ""
  }
)


export const meterTypeSimpleRefPresentSelector = (id: String) => createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return { id: id, present: "somePresent" } as SimpleRef
  }
)








