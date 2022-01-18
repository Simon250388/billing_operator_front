import {IUserHttpService} from "./user-http.factory";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../store/models/user.model";
import {environment} from "../../environments/environment";


export class UserHttpService implements IUserHttpService {

  constructor(private httpClient: HttpClient) {
  }

  login(userName: string, password: string): Observable<IUser> {
    return this.httpClient.post<IUser>(
      `${environment.apiUrl}/login`,
      JSON.stringify({user: userName, password: password}));
  }
}
