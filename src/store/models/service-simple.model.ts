import {SimpleRef} from "./simple-ref.model";


export interface IServiceSimpleModel {
  service: SimpleRef;
  provider: SimpleRef;
  isActive: boolean;
  normVolume: number;
}
