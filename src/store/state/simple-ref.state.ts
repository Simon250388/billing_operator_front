import {SimpleRef} from "../models/simple-ref.model";

export interface ISimpleRefState {
  services: SimpleRef[],
  improvementTypes: SimpleRef[],
  providers: SimpleRef[],
  directionOfUses: SimpleRef[],
  rateGroups: SimpleRef[]
}

export const initialSimpleRefState: ISimpleRefState = {
  services: [],
  improvementTypes: [],
  providers: [],
  directionOfUses: [],
  rateGroups: []
}
