import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {IAccountingPointActive} from "src/store/models/accounting-point-active.model";
import {AccountingPointHttpMockService} from "./accounting-point.http.mock.service";
import {AccountingPointHttpService} from "./accounting-point.http.service";

export const accountingPointHttpServiceFactory = (http: HttpClient) => {
  const isProduction = environment["production"] as boolean;

  if (!isProduction) {
    return new AccountingPointHttpMockService(http);
  }

  return new AccountingPointHttpService(http)
}

@Injectable({
  providedIn: "root",
  useFactory: accountingPointHttpServiceFactory,
  deps: [HttpClient]
})
export abstract class IAccountingPointHttpService {
  abstract load(keyRoomId: String): Observable<IAccountingPointActive[]>
}
