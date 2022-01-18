import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SimpleRef } from "src/store/models/simple-ref.model";
import { ICrudHttpService } from "./crud.http.factory";

export class CrudHttpService implements ICrudHttpService {

    constructor(private httpClient: HttpClient) { }

    getAll(apiDomen: string): Observable<SimpleRef[]> {
        return this.httpClient.get<SimpleRef[]>(`${environment.apiUrl}/${apiDomen}`);
    }

}