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

export const keyRoomPropertyTranslations: { [key: string]: string } = {
  "address": "Адрес",
  "type": "Тип помещения",
  "countPresubcribe": "Прописанных",
  "countResident": "Проживающих",
  "countOwner": "Собственников",
  "commonSquare": "Общая площадь",
  "debt": "Задолженность",
  "countPoints": "Количество точек",
}

export const keyRoomPropertyPresent: { [key: string]: (model: IKeyRoom) => string } = {
  "address": (model: IKeyRoom) => model.address,
  "type": (model: IKeyRoom) => "квартира",
  "countPresubcribe": (model: IKeyRoom) => "2",
  "countResident": (model: IKeyRoom) => "2",
  "countOwner": (model: IKeyRoom) => "2",
  "commonSquare": (model: IKeyRoom) => "100",
  "debt": (model: IKeyRoom) => "200",
  "countPoints": (model: IKeyRoom) => "" + model.accountingPoints.length,
}
