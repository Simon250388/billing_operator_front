import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, of, switchMap, tap } from "rxjs";
import { KeyRoomHttpService } from "src/app/service/key-room.http";
import { ChooseCurrentCompleteAction, EKeyRoomActionAction, ReceivdeResultSearchKeyRoomAction, StartChooseCurrentAction, StartSearchKeyRoomAction } from "../action/key-room.action";

@Injectable()
export class KeyRoomEffect {

    constructor(
        private actions$: Actions,
        private httpService: KeyRoomHttpService,
        private router: Router
    ) { }


    startSearchKeyRoomEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType<StartSearchKeyRoomAction>(EKeyRoomActionAction.StartSearch),
            mergeMap(() =>
                this.httpService.search().pipe(
                    map(
                        (items) => new ReceivdeResultSearchKeyRoomAction({ items: items })
                    )
                )
            )
        )
    )


    setCurrentEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType<StartChooseCurrentAction>(EKeyRoomActionAction.StartChooseCurrent),
            map(action => action.payload),
            switchMap(
                current => of(new ChooseCurrentCompleteAction(current))
            ),
            tap(() => this.router.navigate(["active-accounting-point"])
            ))
    )
}

