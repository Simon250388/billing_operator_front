import {IUserHttpService} from "./user-http.factory";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ESocialProvider, IUser} from "../../store/models/user.model";
import {environment} from "../../environments/environment";


export class UserHttpService implements IUserHttpService {

  constructor(private httpClient: HttpClient) {
  }

  login(userName: string, password: string): Observable<IUser> {
    return this.httpClient.post<IUser>(
      `${environment.apiUrl}/login`,
      JSON.stringify({user: userName, password: password}));
  }

  loginByToken(userName: string, token: string, provider: ESocialProvider): Observable<IUser> {
    return this.httpClient.post<IUser>(
      `${environment.apiUrl}/sociallogin`,
      JSON.stringify({user: userName, token: token, provider: provider}));
  }
}
