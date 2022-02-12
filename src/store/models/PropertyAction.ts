import {EntityEditAction} from "../../service/meter/entity-edit-action";

export interface PropertyAction<T> {
  name: string;
  iconName: string;
  action : EntityEditAction<T>
}
