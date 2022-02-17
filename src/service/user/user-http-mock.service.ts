import {IUserHttpService} from "./user-http.factory";
import {delay, Observable, of} from "rxjs";
import {ESocialProvider, IUser} from "../../store/models/user.model";


export class UserHttpMockService implements IUserHttpService {

  constructor() {
  }

  login(userName: string, password: string): Observable<IUser> {
    return of({
      userName: userName,
      token: "someToken"
    }).pipe(
      delay(1500)
    );
  }

  loginByToken(userName: string, token: string, provider: ESocialProvider): Observable<IUser> {
    return of({
      userName: userName,
      token: token
    }).pipe(
      delay(1500)
    );
  }
}
