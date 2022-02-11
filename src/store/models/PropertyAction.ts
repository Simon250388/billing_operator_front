import {MeterEditAction} from "../../service/meter/meter-edit-action";

export interface PropertyAction<T> {
  name: string;
  iconName: string;
  action : MeterEditAction<T>
}
