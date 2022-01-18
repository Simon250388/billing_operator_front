import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {IKeyRoom} from "src/store/models/key-room.model";
import {KeyRoomHttMockService} from "./key-room-http.mock.service";
import {KeyRoomHttpService} from "./key-room.http.service";

export const keyRoomHttpServiceFactory = (http: HttpClient): IKeyRoomHttpService => {

  const isProduction = environment["production"] as boolean;

  if (!isProduction) {
    return new KeyRoomHttMockService(http);
  }

  return new KeyRoomHttpService(http)

}

@Injectable({
  providedIn: "root",
  useFactory: keyRoomHttpServiceFactory,
  deps: [HttpClient]
})
export abstract class IKeyRoomHttpService {
  abstract search(): Observable<IKeyRoom[]>
}


