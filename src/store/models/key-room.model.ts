import {SimpleRef} from "./simple-ref.model";

export interface IKeyRoom {
  id: string,
  present: string,
  address: string,
  countResident: number,
  countSubscribed: number,
  countOwner: number,
  building: SimpleRef,
  room: SimpleRef | undefined
}

export interface IKeyRoomUpdateModel {
  id: string | undefined,
  present: string,
  address: string,
  countResident: number,
  countSubscribed: number,
  countOwner: number,
  buildingId: string,
  roomId: string | undefined
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
