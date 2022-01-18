import {IUserHttpService} from "./user-http.factory";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IUser} from "../../store/models/user.model";


export class UserHttpMockService implements IUserHttpService {

  constructor(private httpClient: HttpClient) {
  }

  login(userName: string, password: string): Observable<IUser> {
    return of({
      userName: "someUsername@gmail.com",
      token: "someToken"
    });
  }
}
