import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Environmenter } from "ng-environmenter";
import { Observable, of } from "rxjs";
import { IKeyRoom } from "src/store/models/key-room.model";

@Injectable()
export class KeyRoomHttpService {

    protected apiDomen: string = "";

    constructor(
        protected environmenter: Environmenter,
        private http: HttpClient) {

    }


    search(): Observable<IKeyRoom[]> {
        // return this.http.get<IKeyRoom[]>(`${this.environmenter.getGlobalEnvironment()['apiUrl']}/${this.apiDomen}`);

        return of([
            {
                present: "somepresent",
                building: {
                    id: "buildingId",
                    present: "buildingIdpresent"
                },
                room: undefined
            }
        ])

    }

}