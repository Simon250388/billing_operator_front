import {delay, Observable, of} from 'rxjs';
import {IKeyRoom, IKeyRoomUpdateModel} from 'src/store/models/key-room.model';
import {IKeyRoomHttpService} from './key-room.http.service.factory';
import {roomTypes} from "../../store/models/room-type";

export class KeyRoomHttMockService implements IKeyRoomHttpService {

  protected apiDomen: string = "";

  constructor() {
  }

  search(): Observable<IKeyRoom[]> {
    return of([
      {
        id: "Первое",
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        countResident: 4,
        countSubscribed: 4,
        countOwner: 2,
        square: 40,
        roomType: roomTypes[1]
      },
      {
        id: "Второе",
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        countResident: 4,
        countSubscribed: 4,
        countOwner: 4,
        square: 50,
        roomType: roomTypes[1]
      },
      {
        id: "Третье",
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        countResident: 4,
        countSubscribed: 4,
        countOwner: 2,
        square: 60,
        roomType: roomTypes[1]
      },
      {
        id: "Четвертое",
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        countResident: 2,
        countSubscribed: 2,
        countOwner: 2,
        square: 70,
        roomType: roomTypes[1]
      }
    ]).pipe(
      delay(1500)
    )
  }

  save(model: IKeyRoomUpdateModel): Observable<IKeyRoom> {
    const newObject  = {
      id: model.id!!,
      address: model.address,
      countResident: model.countResident,
      countSubscribed: model.countSubscribed,
      countOwner: model.countOwner,
      square: model.square,
      roomType: roomTypes[model.roomTypeId]
    } as IKeyRoom

    return of(newObject).pipe(
      delay(1500)
    );
  }

}
