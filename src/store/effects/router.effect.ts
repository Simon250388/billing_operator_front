import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {filter, map, mergeMap, startWith, switchMap, take} from "rxjs";
import {Store} from "@ngrx/store";
import {IKeyRoomState} from "../state/key-room.state";
import {getKeyRoomItems} from "../selectors/key-room.selector";
import {routerNavigatedAction} from "@ngrx/router-store";
import * as EntityAction from "../action/key-room.action";
import {getRouterKeyRoomId} from "../selectors/router.selector";
import {IAppState} from "../state/app.state";

@Injectable()
export class RouterEffect {

  constructor(
    private readonly actions: Actions,
    private readonly appStore: Store<IAppState>,
    private readonly keyRoomStore: Store<IKeyRoomState>) {
  }

  loadKeyRoom = createEffect(() => this.actions.pipe(
    ofType(routerNavigatedAction),
    startWith("key-room/:id/**"),
    map(() => this.keyRoomStore.select(getKeyRoomItems)),
    map((items) => items.pipe(
      filter(items => items == undefined),
      map(() => EntityAction.startLoadItemsFromApiAction()))),
    switchMap(() => this.keyRoomStore.select(getKeyRoomItems)
      .pipe(
        filter(items => items == undefined))
      .pipe(
        map(() => this.keyRoomStore.dispatch(EntityAction.startLoadItemsFromApiAction()))
      )
      .pipe(
        mergeMap(() => this.appStore.select(getRouterKeyRoomId)
          .pipe(
            filter(params => params != undefined && params['id'] != undefined))
          .pipe(
            take(1),
            map(
              params => EntityAction.chooseCurrenAction({currentId: params!['id']})
            )
          )
        ))
    )))
}
