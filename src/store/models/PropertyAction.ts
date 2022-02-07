import {TypedAction} from "@ngrx/store/src/models";

export interface PropertyAction {
  name: string;
  iconName: string;
  action : TypedAction<any>
}
