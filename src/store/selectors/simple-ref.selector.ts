import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {ISimpleRefState} from "../state/simple-ref.state";

const simpleRefStates = (state: IAppState) => state.simpleRefs;

export const servicesSimpleRefSelector = createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.services
  }
)

export const improvementSimpleRefSelector = createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.improvementTypes
  }
)

export const providerSimpleRefSelector = createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.providers
  }
)

export const directionOfUseSimpleRefSelector = createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.directionOfUses
  }
)

export const rateGroupSimpleRefSelector = createSelector(
  simpleRefStates,
  (state: ISimpleRefState) => {
    return state.rateGroups
  }
)





