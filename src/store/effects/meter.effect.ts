import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import * as EntityActions from "../action/meter.action";
import {catchError, map, mergeMap} from "rxjs";
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
    mergeMap(() => this.httpService.load().pipe(
      map(items => EntityActions.successfulLoadMeterItemsFromApiAction({items: new Map(items.map(i => [i.id, i]))})),
      catchError(() => {
        throw new Error('could not load from http')
      })
    ))
  ))


  updateItemEffect = createEffect(() => this.actions.pipe(
    ofType(EntityActions.startUpdateItemAction),
    mergeMap(value => this.httpService.save(value).pipe(
      map(item => EntityActions.completeUpdateItemAction(item))
    ))
  ))

}
