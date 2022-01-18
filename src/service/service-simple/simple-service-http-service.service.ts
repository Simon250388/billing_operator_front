import {SimpleHttpService} from "./simple-http-service";
import {Observable, of} from "rxjs";
import {IServiceSimpleModel} from "../../store/models/service-simple.model";
import {HttpClient} from "@angular/common/http";

export class SimpleServiceHttpService implements SimpleHttpService {

  constructor(private httpClient: HttpClient) {
  }

  load(): Observable<IServiceSimpleModel[]> {
    return of([]);
  }
}
