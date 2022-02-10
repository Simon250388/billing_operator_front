import {createAction, props} from "@ngrx/store";
import {SimpleRef} from "../models/simple-ref.model";
import {MeterModel} from "../models/meter.model";

export enum EMeterActions {
  openChangeMeterTypeDialog = "[Meter] open meter type change dialog",
  startLoadItemsFromApi = "[Meter] start load items from api",
  successfulLoadItemsFromApi = "[Meter] successful load items from api",
  UpdateItem = "[Meter] update item",
}

export const openChangeMeterTypeDialogAction = createAction(
  EMeterActions.openChangeMeterTypeDialog,
  props<{ meterId: string, meterType: SimpleRef }>()
);

export const updateItemAction = createAction(
  EMeterActions.UpdateItem,
  props<MeterModel>()
);

export const startLoadMeterItemsFromApiAction = createAction(
  EMeterActions.startLoadItemsFromApi
);

export const successfulLoadMeterItemsFromApiAction = createAction(
  EMeterActions.successfulLoadItemsFromApi,
  props<{ items: MeterModel[] }>()
);




