import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as EntityActions from "../action/meter.action";
import {map, switchMap} from "rxjs";
import {IMeterHttpService} from "../../service/meter/meter.http.service.factory";


@Injectable()
export class MeterEffect {
  constructor(
    private actions: Actions,
    private httpService: IMeterHttpService
  ) {
  }

  loadItemsFromApiEffect = createEffect(() => this.actions.pipe(
    ofType(EntityActions.startLoadMeterItemsFromApiAction),
    switchMap(() => this.httpService.load()),
    map((items) => EntityActions.successfulLoadMeterItemsFromApiAction({items: new Map(items.map(i => [i.id, i]))}),
    ))
  )

  updateItemEffect = createEffect(() => this.actions.pipe(
    ofType(EntityActions.startUpdateItemAction),
    switchMap(value => this.httpService.save(value)),
    map(item => EntityActions.completeUpdateItemAction(item))
  ))
}
