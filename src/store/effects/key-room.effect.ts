import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, of, tap } from "rxjs";
import { IKeyRoomHttpService } from "src/app/service/key-room/key-room.http.service.factory";
import { chooseCurrentCompleteAction, receivdeResultSearchKeyRoomAction, startChooseCurrentAction, startSearchKeyRoomAction } from "../action/key-room.action";

@Injectable()
export class KeyRoomEffect {

    constructor(
        private actions: Actions,
        private httpService: IKeyRoomHttpService,
        private router: Router
    ) { }

    startSearchKeyRoomEffect$ = createEffect(
        () => this.actions.pipe(
            ofType(startSearchKeyRoomAction),
            mergeMap(() =>
                this.httpService.search().pipe(
                    map(
                        (items) => receivdeResultSearchKeyRoomAction({ items: items })
                    )
                )
            )
        )
    )

    setCurrentEffect$ = createEffect(
        () => this.actions.pipe(
            ofType(startChooseCurrentAction),
            mergeMap(current => of(chooseCurrentCompleteAction(current))),
            tap(() => this.router.navigate(["active-accounting-point"])
            ))
    )
}

