import {SimpleHttpService} from "./simple-http-service";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IServiceSimpleModel} from "../../store/models/service-simple.model";

export class SimpleServiceHttpMockService implements SimpleHttpService {

  constructor(private httpClient: HttpClient) {
  }

  load(): Observable<IServiceSimpleModel[]> {
    return of([
      {
        service: {
          id: "someserviceId",
          present: "Лифт"
        },
        isActive: true,
        normVolume: 10,
        provider: {
          id: "someProviderId",
          present: "Лифт сервис"
        }
      },
      {
        service: {
          id: "someserviceId",
          present: "Вывоз мусора"
        },
        isActive: true,
        normVolume: 10,
        provider: {
          id: "someProviderId",
          present: "Чистый город"
        }
      }
    ]);
  }
}
