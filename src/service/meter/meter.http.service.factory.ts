import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {MeterHttpService} from "./meter.http.service";
import {MeterModel, MeterModelToUpdate} from "../../store/models/meter.model";
import {MeterHttMockService} from "./meter-room-http.mock.service";

export const meterHttpServiceFactory = (http: HttpClient): IMeterHttpService => {

  const isProduction = environment["production"] as boolean;

  if (!isProduction) {
    return new MeterHttMockService();
  }

  return new MeterHttpService(http)

}

@Injectable({
  providedIn: "root",
  useFactory: meterHttpServiceFactory,
  deps: [HttpClient]
})
export abstract class IMeterHttpService {
  abstract load(): Observable<MeterModel[]>

  abstract save(meterModelT: MeterModelToUpdate): Observable<MeterModel>
}


