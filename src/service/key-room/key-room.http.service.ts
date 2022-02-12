import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { globalEnvironment } from "src/environments/environment";
import {IKeyRoom, IKeyRoomUpdateModel} from "src/store/models/key-room.model";
import { IKeyRoomHttpService } from "./key-room.http.service.factory";

export class KeyRoomHttpService implements IKeyRoomHttpService {

    protected apiDomen: string = "";

    constructor(private http: HttpClient) { }

    search(): Observable<IKeyRoom[]> {
        return this.http.get<IKeyRoom[]>(`${globalEnvironment['apiUrl']}/${this.apiDomen}`);
    }

  save(model: IKeyRoomUpdateModel): Observable<IKeyRoom> {
    return this.http.post<IKeyRoom>(`${globalEnvironment['apiUrl']}/${this.apiDomen}`, JSON.stringify(model) );
  }
}
