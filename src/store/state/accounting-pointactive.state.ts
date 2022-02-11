import {IAccountingPointActive} from "../models/accounting-point-active.model";
import {IServiceSimpleModel} from "../models/service-simple.model";

export interface IAccountingPointActiveState {
  items: Map<String, IAccountingPointActive> | undefined
  simpleServices: Map<String, IServiceSimpleModel> | undefined
}

export const initialAccountingPointActiveState: IAccountingPointActiveState = {
  items: undefined,
  simpleServices: undefined
}
