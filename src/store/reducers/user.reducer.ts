import { EUserAction, UserActions, UserLoginSuccessAction } from "../action/user.action";
import { initialUserState, IUserState } from "../state/user.state";

export const UserReducer = (
    state: IUserState = initialUserState,
    action: UserActions
): IUserState => {
    switch (action.type) {
        case EUserAction.UserLoginSuccess: return {
            current: (<UserLoginSuccessAction>action).payload.user
        }
        default: return state
    }
}