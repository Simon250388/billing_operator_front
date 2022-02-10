import {MeterEditAction} from "../../service/meter/meter-edit-action";

export interface PropertyAction {
  name: string;
  iconName: string;
  action : MeterEditAction
}
