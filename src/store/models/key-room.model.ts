import {SimpleEnum} from "./simple-ref.model";

export interface IKeyRoom {
  id: string,
  address: string,
  countResident: number,
  countSubscribed: number,
  countOwner: number,
  square: number,
  roomType: SimpleEnum,
}

export interface IKeyRoomUpdateModel {
  id: string,
  address: string,
  roomTypeId: number,
  countResident: number,
  countSubscribed: number,
  countOwner: number,
  square: number,
}

export const keyRoomPropertyTranslations: { [key: string]: string } = {
  "address": "Адрес",
  "type": "Тип помещения",
  "countSubscribed": "Прописанных",
  "countResident": "Проживающих",
  "countOwner": "Собственников",
  "commonSquare": "Общая площадь",
  "debt": "Задолженность",
}

export const keyRoomPropertyPresent: { [key: string]: (model: IKeyRoom) => string } = {
  "address": (model: IKeyRoom) => model.address,
  "type": () => "квартира",
  "countSubscribed": (model: IKeyRoom) => model.countSubscribed.toString(),
  "countResident": (model: IKeyRoom) => model.countResident.toString(),
  "countOwner": (model: IKeyRoom) => model.countOwner.toString(),
  "commonSquare": () => "100",
  "debt": () => "200"
}
