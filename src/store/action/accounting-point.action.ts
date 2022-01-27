import {createAction, props} from "@ngrx/store";
import {IAccountingPointActive} from "../models/accounting-point-active.model";
import {SimpleRef} from "../models/simple-ref.model";

export enum EActiveAccountingPointAction {
  LoadFromApiStart = "[AccountingPoint] load from api start",
  LoadFromApiSuccess = "[AccountingPoint] load from api success",
  CreateActiveAccountingPoint = "[AccountingPoint] create new",
  DisconnectService = "[AccountingPoint] disconnect service",
  DisconnectMeter = "[AccountingPoint] Disconnect meter",
  ConnectMeter = "[AccountingPoint] Connect meter",
  ChangeProvider = "[AccountingPoint] Change provider",
  ChangeMeterValue = "[AccountingPoint] Change meter value",
  ChangeSelected = "[AccountingPoint] Change selected"
}

export const loadFromApiStartAction = createAction(
  EActiveAccountingPointAction.LoadFromApiStart,
  props<String>()
)

export const loadFromApiStartActionSuccessAction = createAction(
  EActiveAccountingPointAction.LoadFromApiSuccess,
  props<{ items: IAccountingPointActive[] }>()
)

export const createActiveAccountingPointAction = createAction(
  EActiveAccountingPointAction.CreateActiveAccountingPoint
);

export const disconnectServiceInActiveAccountingPointAction = createAction(
  EActiveAccountingPointAction.DisconnectService,
  props<SimpleRef>()
)

export const disconnectMeterInActiveAccountingPointAction = createAction(
  EActiveAccountingPointAction.DisconnectMeter,
  props<SimpleRef>()
)

export const connectMeterInActiveAccountingPointAction = createAction(
  EActiveAccountingPointAction.ConnectMeter,
  props<SimpleRef>()
)

export const changeProviderInActiveAccountingPointAction = createAction(
  EActiveAccountingPointAction.ChangeProvider,
  props<SimpleRef>()
)

export const changeMeterValueInActiveAccountingPointAction = createAction(
  EActiveAccountingPointAction.ChangeMeterValue,
  props<{ value: number }>()
)

export const changeSelectedActiveAccountingPointAction = createAction(
  EActiveAccountingPointAction.ChangeSelected,
  props<IAccountingPointActive>()
)
