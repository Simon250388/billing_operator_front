import { ChooseCurrentCompleteAction, EKeyRoomActionAction, KeyRoomActionActions, ReceivdeResultSearchKeyRoomAction } from "../action/key-room.action";
import { IKeyRoomState, initialKeyRoomState } from "../state/key-room.state";

export const KeyRoomReducer = (
    state: IKeyRoomState = initialKeyRoomState,
    action: KeyRoomActionActions
): IKeyRoomState => {
    switch (action.type) {
        case EKeyRoomActionAction.ChooseCurrentComplete:
            return {
                items: state.items,
                history: state.history,
                current: (<ChooseCurrentCompleteAction>action).payload.item
            }

        case EKeyRoomActionAction.ReceivdeResultSearchKeyRoom:
            return {
                items: (<ReceivdeResultSearchKeyRoomAction>action).payload.items,
                history: state.history,
                current: state.current
            }

        default: return state;
    }
}