import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {filter, map, switchMap} from "rxjs";
import {IAccountingPointHttpService} from "src/service/accounting-point-service/accounting-point.http.factory";
import * as EntityActions from "../action/accounting-point.action";
import {Store} from "@ngrx/store";
import {IAccountingPointActiveState} from "../state/accounting-pointactive.state";
import {IKeyRoomState} from "../state/key-room.state";
import {getCurrentIdSelector} from "../selectors/key-room.selector";


@Injectable()
export class AccountingPointEffect {
  constructor(
    private actions: Actions,
    private httpService: IAccountingPointHttpService,
    // private simpleServiceHttpService: IAccountingPointHttpService,
    private store: Store<IAccountingPointActiveState>,
    private keyRoomStore: Store<IKeyRoomState>
  ) {
  }

  loadItemsFromApiEffect = createEffect(() =>
    this.actions.pipe(
      ofType(EntityActions.startLoadItemsFromApiAction),
      switchMap(() => this.keyRoomStore.select(getCurrentIdSelector)),
      filter(currentKeyRoomId => currentKeyRoomId != undefined),
      switchMap((currentKeyRoomId) => this.httpService.load(currentKeyRoomId!)),
      map((items) => EntityActions.successfulLoadItemsFromApiAction({items: new Map(items.map(i => [i.id, i]))})
      )))


  updateItemEffect = createEffect(() =>
    this.actions.pipe(
      ofType(EntityActions.startUpdateItemAction),
      switchMap(value => this.httpService.save(value)),
      map(item => EntityActions.completeUpdateItemAction(item))
    ))
}
