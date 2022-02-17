import {Observable} from "rxjs";
import {ESocialProvider, IUser} from "../../store/models/user.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserHttpMockService} from "./user-http-mock.service";
import {UserHttpService} from "./user-http.service";
import {Injectable} from "@angular/core";


export const UserHttpServiceFactory = (http: HttpClient) => {
  const isProduction = environment["production"] as boolean;

  if (!isProduction) {
    return new UserHttpMockService();
  }

  return new UserHttpService(http)
}

@Injectable(
  {
    providedIn: "root",
    useFactory: UserHttpServiceFactory,
    deps: [HttpClient]
  }
)
export abstract class IUserHttpService {
  abstract login(userName: string, password: string): Observable<IUser>
  abstract loginByToken(userName: string, token: string, provider: ESocialProvider): Observable<IUser>
}
