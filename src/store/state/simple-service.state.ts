import {IServiceSimpleModel} from "../models/service-simple.model";

export interface IServiceSimpleState {
  items: IServiceSimpleModel[],
  selected: IServiceSimpleModel | undefined
}

export const initialServiceSimpleState: IServiceSimpleState = {
  items: [],
  selected: undefined
}
