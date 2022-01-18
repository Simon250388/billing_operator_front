import {Observable} from "rxjs";
import {IServiceSimpleModel} from "../../store/models/service-simple.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SimpleServiceHttpMockService} from "./simple-service-http-mock.service";


export const simpleHttpServiceFactory = (http: HttpClient) => {
  const isProduction = environment["production"] as boolean;

  if (!isProduction) {
    return new SimpleServiceHttpMockService(http);
  }

  return new SimpleServiceHttpMockService(http)
}

@Injectable({
  providedIn: "root",
  useFactory: simpleHttpServiceFactory,
  deps: [HttpClient]
})
export abstract class SimpleHttpService {
  abstract load(): Observable<IServiceSimpleModel[]>
}
