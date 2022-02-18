import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs";
import * as EntityActions from "../action/user.action";
import { IUserHttpService } from "../../service/user/user-http.factory";


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
      mergeMap(payload => this.httpService.login(payload.userName, payload.password)),
      map((user) => EntityActions.UserLoginSuccessAction(user))
    ))


  loginSocialProviderEffect = createEffect(
    () => this.actions$.pipe(
      ofType(EntityActions.UserTryLoginSocialProviderAction),
      mergeMap(payload => this.httpService.loginByToken(payload.userName, payload.token, payload.providerType)),
      map((user) => EntityActions.UserLoginSuccessAction(user))
    ))


  logoutEffect = createEffect(
    () => this.actions$.pipe(
      ofType(EntityActions.UserLogoutAction),
      map(() => EntityActions.UserLogoutCompleteAction()),
      tap(() => this.router.navigate(["/login"]))
    ))
}
