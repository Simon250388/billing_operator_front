import { createSelector } from "@ngrx/store";
import { IUser } from "../models/user.model";
import { IAppState } from "../state/app.state";
import { IUserState } from "../state/user.state";

const userState = (state: IAppState) => state.user;
