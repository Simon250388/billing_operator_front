import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {mergeMap, of, startWith} from "rxjs";
import {Store} from "@ngrx/store";
import {routerNavigatedAction} from "@ngrx/router-store";
import * as EntityAction from "../action/key-room.action";
import * as CommonAction from "../action/common.action";
import {IAppState} from "../state/app.state";

@Injectable()
export class RouterEffect {

  constructor(
    private readonly actions: Actions,
    private readonly appStore: Store<IAppState>) {
  }

  loadKeyRoom = createEffect(() => this.actions.pipe(
    ofType(routerNavigatedAction),
    startWith("key-room/:id/**"),
    mergeMap(() => this.appStore.select((state) => state.router?.state?.root.firstChild?.firstChild?.params)),
    mergeMap(params => {
      if (params != undefined && params['id'] != undefined) {
        return [
          EntityAction.startLoadItemsFromApiAction(),
          EntityAction.chooseCurrenAction({currentId: params!['id']})
        ]
      } else {
        return of(CommonAction.emptyAction())        
      }
    })
  ))
}
