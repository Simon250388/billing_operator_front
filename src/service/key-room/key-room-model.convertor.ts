import {IKeyRoom, IKeyRoomUpdateModel} from "../../store/models/key-room.model";


export const keyRoomModelConvertor = (model: IKeyRoom): IKeyRoomUpdateModel => {
  return {
    id: model.id,
    present: model.present,
    address: model.address,
    countResident: model.countResident,
    buildingId: model.building.id,
    roomId: model.room?.id
  }
}
