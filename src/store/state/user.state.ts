import { ComponentPortal } from "@angular/cdk/portal";
import { IUser } from "../models/user.model";

export interface IUserState {
    current: IUser | undefined
}

export const initialUserState: IUserState = {
    current: undefined
}