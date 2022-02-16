import {createAction, props} from "@ngrx/store";

import {IAccountingPointActive, IAccountingPointActiveToUpdateModel} from "../models/accounting-point-active.model";
import {IServiceSimpleModel} from "../models/service-simple.model";

export enum EActiveAccountingPointAction {
  startLoadItemsFromApi = "[AccountingPoint] start load items from api",
  successfulLoadItemsFromApi = "[AccountingPoint] successful load items from api",
  startLoadSimpleServiceItemsFromApi = "[SimpleService] start load items from api",
  successfulLoadSimpleServiceItemsFromApi = "[SimpleService] successful load items from api",

  AddAccountingPointStart = "[AccountingPoint] add new start",
  AddAccountingPointSuccess = "[AccountingPoint] add new success",

  startUpdateItem = "[AccountingPoint] start update item",
  completeUpdateItem = "[AccountingPoint] complete update item"
}

export const startUpdateItemAction = createAction(
  EActiveAccountingPointAction.startUpdateItem,
  props<IAccountingPointActiveToUpdateModel>()
);

export const completeUpdateItemAction = createAction(
  EActiveAccountingPointAction.completeUpdateItem,
  props<IAccountingPointActive>()
);

export const startLoadItemsFromApiAction = createAction(
  EActiveAccountingPointAction.startLoadItemsFromApi
);

export const successfulLoadItemsFromApiAction = createAction(
  EActiveAccountingPointAction.successfulLoadItemsFromApi,
  props<{items: Map<String, IAccountingPointActive>}>()
);

export const startLoadSimpleServiceItemsFromApiAction = createAction(
  EActiveAccountingPointAction.startLoadSimpleServiceItemsFromApi
);

export const successfulLoadSimpleServiceItemsFromApiAction = createAction(
  EActiveAccountingPointAction.successfulLoadSimpleServiceItemsFromApi,
  props<{items: Map<String, IServiceSimpleModel>}>()
);

export const addAccountingPointStartAction = createAction(
  EActiveAccountingPointAction.AddAccountingPointStart,
  props<IAccountingPointActiveToUpdateModel>()
);

export const addAccountingPointSuccessAction = createAction(
  EActiveAccountingPointAction.AddAccountingPointSuccess,
  props<IAccountingPointActive>()
);
