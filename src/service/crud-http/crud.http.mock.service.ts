import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { SimpleRef } from "src/store/models/simple-ref.model";
import { ICrudHttpService } from "./crud.http.factory";


export class CrudHttpMockService implements ICrudHttpService {

    constructor(private httpClient: HttpClient) { }

    getAll(apiDomen: string): Observable<SimpleRef[]> {
        if (apiDomen == "service") {
            return of([
                {
                    id: "someServiceID",
                    present: "Холодная вода"
                }
            ])
        }
        throw new Error("Method not implemented.");
    }

}