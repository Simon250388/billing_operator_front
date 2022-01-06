import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs";
import { IAccountingPointHttpService } from "src/app/service/accounting-point-service/accounting-point.http.factory";
import { loadFromApiStartAction, loadFromApiStartActionSuccessAction } from "../action/accounting-point.action";


@Injectable()
export class AccountingPointEffect {
    constructor(
        private actions: Actions,
        private httpService: IAccountingPointHttpService
    ) { }

    startLoadFromHttpEffect = createEffect(
        () => this.actions.pipe(
            ofType(loadFromApiStartAction),
            mergeMap(() =>
                this.httpService.load().pipe(
                    map(
                        (items) => loadFromApiStartActionSuccessAction({ items: items })
                    )
                )
            )
        )
    )
}