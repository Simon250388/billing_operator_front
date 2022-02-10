import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {globalEnvironment} from "src/environments/environment";
import {IMeterHttpService} from "./meter.http.service.factory";
import {MeterModel} from "../../store/models/meter.model";

export class MeterHttpService implements IMeterHttpService {

  protected apiDomen: string = "";

  constructor(private http: HttpClient) {
  }

  load(): Observable<MeterModel[]> {
    return this.http.get<MeterModel[]>(`${globalEnvironment['apiUrl']}/${this.apiDomen}`);
  }

  save(model: MeterModel): Observable<MeterModel> {
    return this.http.post<MeterModel>(`${globalEnvironment['apiUrl']}/${this.apiDomen}`, JSON.stringify(model));
  }

  put(model: MeterModel, property: string, value: any): Observable<MeterModel> {
    const newModelState = {...model}
    newModelState.meterType = value
    return this.http.put<MeterModel>(`${globalEnvironment['apiUrl']}/${this.apiDomen}/${newModelState.id}`, JSON.stringify(newModelState));
  }
}
