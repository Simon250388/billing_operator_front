import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { globalEnvironment } from "src/environments/environment";
import {IKeyRoom, IKeyRoomUpdateModel} from "src/store/models/key-room.model";
import { IKeyRoomHttpService } from "./key-room.http.service.factory";
import {environment} from "src/environments/environment";

export class KeyRoomHttpService implements IKeyRoomHttpService {
  private endpoint: String = environment["apiUrl"]
  
  protected apiDomen: string = "key-room";

  constructor(private http: HttpClient) { }

  search(): Observable<IKeyRoom[]> {
      return this.http.get<IKeyRoom[]>(`${this.endpoint}/${this.apiDomen}`);
  }

  save(model: IKeyRoomUpdateModel): Observable<IKeyRoom> {
    return this.http.post<IKeyRoom>(`${this.endpoint}/${this.apiDomen}`, JSON.stringify(model) );
  }
}
