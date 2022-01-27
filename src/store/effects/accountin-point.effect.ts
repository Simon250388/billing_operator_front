import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {mergeMap, map} from "rxjs";
import {IAccountingPointHttpService} from "src/service/accounting-point-service/accounting-point.http.factory";
import * as EntityActions from "../action/accounting-point.action";
import {Store} from "@ngrx/store";
import {IAppState} from "../state/app.state";


@Injectable()
export class AccountingPointEffect {
  constructor(
    private actions: Actions,
    private httpService: IAccountingPointHttpService,
    private store: Store<IAppState>
  ) {
  }

  startLoadFromHttpEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(EntityActions.loadFromApiStartAction),
        mergeMap((payload: String) =>
          this.httpService.load(payload).pipe(
            map(
              (items) => EntityActions.loadFromApiStartActionSuccessAction({items: items})
            )
          )
        )
      )
  )


}
