import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { from, of, switchMap, map, tap } from "rxjs";
import { EUserAction, UserLoginSuccessAction, UserTryLoginAction } from "../action/user.action";

@Injectable()
export class UserEffect {

    constructor(
        private actions$: Actions,
        private router: Router
    ) { }

    loginUserEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType<UserTryLoginAction>(EUserAction.UserTryLogin),
            switchMap(() =>
                of(new UserLoginSuccessAction(
                    {
                        user: {
                            userName: "someUsername",
                            token: "someToken"
                        }
                    }
                )
                )),
                tap(() => this.router.navigate(["key-room"]))
           
        ))
}