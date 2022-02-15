import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {filter, startWith, switchMap, take} from "rxjs";
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
      switchMap(() => this.keyRoomStore.select(getKeyRoomItems)),
      take(1),
      filter(items => items == undefined),
      switchMap(() => this.appStore.select(getRouterKeyRoomId)),
      filter((params) => params && params['id']),
      switchMap((params) => {
          return [
            EntityAction.startLoadItemsFromApiAction(),
            EntityAction.finishChooseCurrenAction({currentId: params!['id']})
          ]
        }
      )
    )
  )
}
