import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import * as EntityActions from "../action/meter.action";
import * as CommonAction from "../action/common.action";
import {switchMap, tap} from "rxjs";
import {IAppState} from "../state/app.state";
import {Store} from "@ngrx/store";
import {IMeterHttpService} from "../../service/meter/meter.http.service.factory";
import {IMeterState} from "../state/meter.state";


@Injectable()
export class MeterEffect {
  constructor(
    private actions: Actions,
    private router: Router,
    private dialog: MatDialog,
    private appStore: Store<IAppState>,
    private meterStore: Store<IMeterState>,
    private httpService: IMeterHttpService
  ) {
  }

  loadItemsFromApiEffect = createEffect(() => this.actions.pipe(
    ofType(EntityActions.startLoadMeterItemsFromApiAction),
    tap(() => this.appStore.dispatch(CommonAction.startHttpRequestAction())),
    switchMap(() => this.httpService.load()),
    switchMap((items) => {
        return [
          EntityActions.successfulLoadMeterItemsFromApiAction({items: new Map(items.map(i => [i.id, i]))}),
          CommonAction.finishHttpRequestAction(),
        ]
      }
    ))
  )

  updateItemEffect = createEffect(() => this.actions.pipe(
    ofType(EntityActions.startUpdateItemAction),
    tap(() => this.appStore.dispatch(CommonAction.startHttpRequestAction())),
    switchMap(value => this.httpService.save(value)),
    switchMap(item => {
      return [
        EntityActions.completeUpdateItemAction(item),
        CommonAction.finishHttpRequestAction()
      ]
    })
  ))

}
