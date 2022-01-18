import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ISimpleRefState } from "../state/simple-ref.state";

const simpleRefStates = (state: IAppState) => state.simpleRefs;

export const getSimpleItemsByNameSelector = (stateProperty: string) => createSelector(
    simpleRefStates,
    (state: ISimpleRefState) => {
        if (stateProperty == "services") return state.services
        else return state.services
    }
)