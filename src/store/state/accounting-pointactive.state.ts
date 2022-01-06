import { IAccountingPointActive } from "../models/accounting-point-active.model";

export interface IAccountingPointActiveState {
    items: IAccountingPointActive[],
    selected: IAccountingPointActive | undefined
}

export const initialAccountingPointActiveState: IAccountingPointActiveState = {
    items: [],
    selected: undefined
}