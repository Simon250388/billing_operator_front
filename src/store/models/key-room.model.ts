import {SimpleRef} from "./simple-ref.model";

export interface IKeyRoom {
  present: string,
  address: string,
  countPoints: number,
  id: string,
  building: SimpleRef,
  room: SimpleRef | undefined
}

export const keyRoomPropertyTranslations: { [key: string]: string } = {
  "address": "Адрес",
  "type": "Тип помещения",
  "countPresubcribe": "Прописанных",
  "countResident": "Проживающих",
  "countOwner": "Собственников",
  "commonSquare": "Общая площадь",
  "debt": "Задолженность",
}

export const keyRoomPropertyPresent: { [key: string]: (model: IKeyRoom) => string } = {
  "address": (model: IKeyRoom) => model.address,
  "type": () => "квартира",
  "countPresubcribe": () => "2",
  "countResident": () => "2",
  "countOwner": () => "2",
  "commonSquare": () => "100",
  "debt": () => "200"
}
