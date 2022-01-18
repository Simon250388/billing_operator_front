import {createSelector} from "@ngrx/store";
import {IServiceSimpleState} from "../state/simple-service.state";
import {IAppState} from "../state/app.state";

const simpleServiceState = (state: IAppState) => state.simpleService;

export const getSimpleServiceSelected = createSelector(
  simpleServiceState,
  (state: IServiceSimpleState) => state.selected
)

export const getSimpleServicesItems = createSelector(
  simpleServiceState,
  (state: IServiceSimpleState) => state.items
)
