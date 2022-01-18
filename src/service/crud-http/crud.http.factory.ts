import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SimpleRef } from "src/store/models/simple-ref.model";
import { CrudHttpMockService } from "./crud.http.mock.service";
import { CrudHttpService } from "./crud.http.service";


export const crudHttpServiceFactory = (http: HttpClient): ICrudHttpService => {

    const isProduction = environment.production as boolean;

    if (!isProduction) {
        return new CrudHttpMockService(http);
    }

    return new CrudHttpService(http)

}

@Injectable({
    providedIn: "root",
    useFactory: crudHttpServiceFactory,
    deps: [HttpClient]
})
export abstract class ICrudHttpService {
    abstract getAll(apiDomen: string): Observable<SimpleRef[]>
}
