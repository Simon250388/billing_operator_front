import { createSelector } from "@ngrx/store";
import { IAccountingPointActiveState } from "../state/accounting-pointactive.state";
import { IAppState } from "../state/app.state";

const accountingPointState = (state: IAppState) => state.accountinPoints;

export const selectAccountingAllPoint = createSelector(
    accountingPointState,
    (state: IAccountingPointActiveState) => state.items
)


export const getSelectedAccountingPoint = createSelector(
    accountingPointState,
    (state: IAccountingPointActiveState) => state.selected
)