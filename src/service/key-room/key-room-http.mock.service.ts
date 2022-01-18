import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IKeyRoom } from 'src/store/models/key-room.model';
import { IKeyRoomHttpService } from './key-room.http.service.factory';

export class KeyRoomHttMockService implements IKeyRoomHttpService {

  protected apiDomen: string = "";

  constructor(private http: HttpClient) { }

  search(): Observable<IKeyRoom[]> {
    return of([
      {
        present: "414000, г. Москва, ул. Королева, д. 985б кв. 999",
        id: "someId",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined
      },
      {
        present: "414000, г. Москва, ул. Королева, д. 985б кв. 999",
        id: "someId",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined
      },
      {
        present: "414000, г. Москва, ул. Королева, д. 985б кв. 999",
        id: "someId",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined
      },
      {
        present: "414000, г. Москва, ул. Королева, д. 985б кв. 999",
        id: "someId",
        building: {
          id: "someBuildingId",
          present: "some"
        },
        room: undefined
      }
    ])
  }

}
