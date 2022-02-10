import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {globalEnvironment} from "src/environments/environment";
import {IMeterHttpService} from "./meter.http.service.factory";
import {MeterModel, MeterModelToUpdate} from "../../store/models/meter.model";

export class MeterHttpService implements IMeterHttpService {

  protected apiDomen: string = "";

  constructor(private http: HttpClient) {
  }

  load(): Observable<MeterModel[]> {
    return this.http.get<MeterModel[]>(`${globalEnvironment['apiUrl']}/${this.apiDomen}`);
  }

  save(model: MeterModelToUpdate): Observable<MeterModel> {
    return this.http.post<MeterModel>(`${globalEnvironment['apiUrl']}/${this.apiDomen}`, JSON.stringify(model));
  }
}
