import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {MeterHttpService} from "./meter.http.service";
import {MeterModel} from "../../store/models/meter.model";
import {MeterHttMockService} from "./meter-room-http.mock.service";

export const meterHttpServiceFactory = (http: HttpClient): IMeterHttpService => {

  const isProduction = environment["production"] as boolean;

  if (!isProduction) {
    return new MeterHttMockService(http);
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

  abstract save(model: MeterModel): Observable<MeterModel>
  abstract put(model: MeterModel, property: String, value: any): Observable<MeterModel>
}


