import { Action } from "@ngrx/store";
import { AccountingPointActive } from "../models/accounting-point-active.model";
import { SimpleRef } from "../models/simple-ref.model";

export enum EActiveAccountingPointAction {
    GetActiveAccountingPoint = "[AccountingPoint] get active",
    CreateActiveAccountingPoint = "[AccountingPoint] create new",
    DisconnectService = "[AccountingPoint] disconnect service",
    DisconnectMeter = "[AccountingPoint] Disconnect metter",
    ConnectMeter = "[AccountingPoint] Connect metter",
    ChangeProvider = "[AccountingPoint] Change provider",
    ChangeSelected = "[AccountingPoint] Change selected"
}

export class GetActiveAccountingPoint implements Action {
    readonly type: string = EActiveAccountingPointAction.GetActiveAccountingPoint;

}

export class CreateActiveAccountingPoint implements Action {
    readonly type: string = EActiveAccountingPointAction.CreateActiveAccountingPoint;
}

export class DisconnectService implements Action {
    readonly type: string = EActiveAccountingPointAction.DisconnectService;
    constructor(public payload: { item: AccountingPointActive }) { }
}

export class DisconnectMeter implements Action {
    readonly type: string = EActiveAccountingPointAction.DisconnectMeter;
    constructor(public payload: AccountingPointActive) { }
}

export class ConnectMeter implements Action {
    readonly type: string = EActiveAccountingPointAction.ConnectMeter;
    constructor(public payload: AccountingPointActive) { }
}

export class ChangeProviderIntoSelectedAccountingPoint implements Action {
    readonly type: string = EActiveAccountingPointAction.ChangeProvider;
    constructor(public payload: SimpleRef) { }
}

export class ChangeSelected implements Action {
    readonly type: string = EActiveAccountingPointAction.ChangeSelected;
    constructor(public payload: AccountingPointActive) { }
}

export type ActiveAccountingPointActions =
    GetActiveAccountingPoint | CreateActiveAccountingPoint | DisconnectService
    | DisconnectMeter | ConnectMeter | ChangeProviderIntoSelectedAccountingPoint | ChangeSelected;