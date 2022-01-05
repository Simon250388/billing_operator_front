import { ActiveAccountingPointActions, ChangeProviderIntoSelectedAccountingPoint, ChangeSelected, EActiveAccountingPointAction } from "../action/accounting-point.action";
import { IAccountingPointActiveState, initialAccountingPointActiveState } from "../state/accounting-pointactive.state";

export const accountingPointReducer = (
    state: IAccountingPointActiveState = initialAccountingPointActiveState,
    action: ActiveAccountingPointActions
) : IAccountingPointActiveState => {
    switch (action.type) {
        case EActiveAccountingPointAction.ChangeSelected: return {
            items: state.items,
            selected: (<ChangeSelected>action).payload
        }
        case EActiveAccountingPointAction.ChangeProvider: {

            const index = state.items.findIndex(item => item.id == state.selected?.id);

            const newState = [...state.items];

            const selected = newState[index];

            selected.provider = (<ChangeProviderIntoSelectedAccountingPoint>action).payload;

            return {               
                items: newState,
                selected: selected
            }
        }
        default: return state
    }

}