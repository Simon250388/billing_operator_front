import {delay, Observable, of} from 'rxjs';
import {IKeyRoom, IKeyRoomUpdateModel} from 'src/store/models/key-room.model';
import {IKeyRoomHttpService} from './key-room.http.service.factory';

export class KeyRoomHttMockService implements IKeyRoomHttpService {

  protected apiDomen: string = "";

  constructor() {
  }

  search(): Observable<IKeyRoom[]> {
    return of([
      {
        present: "Королева",
        id: "1",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined,
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        countResident: 4,
        countSubscribed: 4,
        countOwner: 2,

      },
      {
        present: "Второе",
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        id: "2",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined,
        countResident: 4,
        countSubscribed: 4,
        countOwner: 4,
      },
      {
        present: "Второе",
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        id: "3",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined,
        countResident: 4,
        countSubscribed: 4,
        countOwner: 2,
      },
      {
        present: "Третье",
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        id: "4",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined,
        countResident: 2,
        countSubscribed: 2,
        countOwner: 2,
      }
    ]).pipe(
      delay(1500)
    )
  }

  save(model: IKeyRoomUpdateModel): Observable<IKeyRoom> {
    return of(
      {
        present: model.present,
        id: model.id!!,
        building: {
          id: model.buildingId,
          present: "asdasd"
        },
        room: undefined,
        address: model.address,
        countResident: model.countResident,
        countSubscribed: model.countSubscribed,
        countOwner: model.countOwner,
      }).pipe(
        delay(1500)
    );
  }

}
