import {SimpleRef} from "./simple-ref.model";
import {IAccountingPointActive} from "./accounting-point-active.model";
import {IServiceSimpleModel} from "./service-simple.model";

export interface IKeyRoom {
  present: string,
  address: string,
  countPoints: number,
  id: string,
  building: SimpleRef,
  room: SimpleRef | undefined,
  accountingPoints: IAccountingPointActive[],
  simpleServices: IServiceSimpleModel[],
  isAccountingPointLoad: boolean;
  isSimpleServiceLoad: boolean;
}
