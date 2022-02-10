import {createAction, props} from "@ngrx/store";
import {SimpleRef} from "../models/simple-ref.model";
import {MeterModel, MeterModelToUpdate} from "../models/meter.model";




export enum EMeterActions {
  openChangeMeterTypeDialog = "[Meter] open meter type change dialog",
  openChangeVerificationDateDialog = "[Meter] open verification date change dialog",
  startLoadItemsFromApi = "[Meter] start load items from api",
  successfulLoadItemsFromApi = "[Meter] successful load items from api",
  startUpdateItem = "[Meter] start update item",
  completeUpdateItem = "[Meter] complete update item",
}

export const openChangeMeterTypeDialogAction = createAction(
  EMeterActions.openChangeMeterTypeDialog,
  props<{ meterId: string, meterType: SimpleRef }>()
);

export const openChangeVerificationDateDialogAction = createAction(
  EMeterActions.openChangeVerificationDateDialog,
  props<{ meterId: string, verificationDate: String }>()
);

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






