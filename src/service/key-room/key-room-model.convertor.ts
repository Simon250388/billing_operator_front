import {IKeyRoom, IKeyRoomUpdateModel} from "../../store/models/key-room.model";


export const keyRoomModelConvertor = (model: IKeyRoom): IKeyRoomUpdateModel => {
  return {
    id: model.id,
    address: model.address,
    countResident: model.countResident,
    countSubscribed: model.countSubscribed,
    countOwner: model.countOwner,
    square: model.square,
    roomTypeId: model.roomType.id
  }
}
