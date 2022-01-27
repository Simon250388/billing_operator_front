import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IKeyRoom} from 'src/store/models/key-room.model';
import {IKeyRoomHttpService} from './key-room.http.service.factory';

export class KeyRoomHttMockService implements IKeyRoomHttpService {

  protected apiDomen: string = "";

  constructor(private http: HttpClient) {
  }

  search(): Observable<IKeyRoom[]> {
    return of([
      {
        present: "Королева",
        id: "someId",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined,
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        countPoints: 4,
        isAccountingPointLoad: false,
        simpleServices: [],
        isSimpleServiceLoad: false,
        accountingPoints: []
      },
      {
        present: "Второе",
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        id: "someId",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined,
        countPoints: 4,
        isAccountingPointLoad: false,
        simpleServices: [],
        isSimpleServiceLoad: false,
        accountingPoints: []

      },
      {
        present: "Второе",
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        id: "someId",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined,
        countPoints: 4,
        isAccountingPointLoad: false,
        simpleServices: [],
        isSimpleServiceLoad: false,
        accountingPoints: []
      },
      {
        present: "Третье",
        address: "414000, г. Москва, ул. Королева, д. 985, кв. 999",
        id: "someId",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined,
        countPoints: 4,
        isAccountingPointLoad: false,
        simpleServices: [],
        isSimpleServiceLoad: false,
        accountingPoints: []
      }
    ])
  }

}
