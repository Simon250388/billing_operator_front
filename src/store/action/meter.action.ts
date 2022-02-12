import {createAction, props} from "@ngrx/store";
import {MeterModel, MeterModelToUpdate} from "../models/meter.model";

export enum EMeterActions {
  startLoadItemsFromApi = "[Meter] start load items from api",
  successfulLoadItemsFromApi = "[Meter] successful load items from api",
  startUpdateItem = "[Meter] start update item",
  completeUpdateItem = "[Meter] complete update item",
  clearState = "[Meter] clear state",
}

export const startUpdateItemAction = createAction(
  EMeterActions.startUpdateItem,
  props<MeterModelToUpdate>()
);

export const completeUpdateItemAction = createAction(
  EMeterActions.completeUpdateItem,
  props<MeterModel>()
);

export const startLoadMeterItemsFromApiAction = createAction(
  EMeterActions.startLoadItemsFromApi
);

export const successfulLoadMeterItemsFromApiAction = createAction(
  EMeterActions.successfulLoadItemsFromApi,
  props<{items: Map<String, MeterModel>}>()
);

export const clearStateMeterStateAction = createAction(
  EMeterActions.clearState
);






