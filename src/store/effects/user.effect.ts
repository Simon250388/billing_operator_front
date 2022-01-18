import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, mergeMap, tap} from "rxjs";
import * as EntityActions from "../action/user.action";
import {IUserHttpService} from "../../service/user/user-http.factory";


@Injectable()
export class UserEffect {

  constructor(
    private actions$: Actions,
    private router: Router,
    private httpService: IUserHttpService) {
  }

  loginUserEffect = createEffect(
    () => this.actions$.pipe(
      ofType(EntityActions.UserTryLoginAction),
      mergeMap(payload => this.httpService.login(payload.userName, payload.password)
        .pipe(map((user) => EntityActions.UserLoginSuccessAction(user)))),
      tap(() => this.router.navigate(["key-room"]))
    ))
}
