import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of, switchMap} from "rxjs";
import {IKeyRoomHttpService} from "src/service/key-room/key-room.http.service.factory";
import * as EntityActions from "../action/key-room.action";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {IKeyRoomState} from "../state/key-room.state";

@Injectable()
export class KeyRoomEffect {

  constructor(
    private readonly actions: Actions,
    private readonly httpService: IKeyRoomHttpService,
    private readonly router: Router,
    private readonly keyRoomStore: Store<IKeyRoomState>
  ) {
  }

  loadEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.startLoadItemsFromApiAction),
      mergeMap(() => this.keyRoomStore.select((state) => state.items)),
      switchMap((items) => {
          if (items == undefined) {
            return this.httpService.search().pipe(
              map(items => EntityActions.successfulLoadItemsFromApiAction({items: new Map(items.map(i => [i.id, i]))})),
              catchError(() => {
                throw new Error('could not get services from http')
              }))
          } else {
            return of(EntityActions.emptyAction)
          }
        }
      )
    ))

  saveEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.addNewKeyRoomStartAction),
      mergeMap(action => this.httpService.save(action)),
      switchMap(item => {
          return [
            EntityActions.addNewKeyRoomSuccessAction(item),
            EntityActions.chooseCurrenAction({currentId: item.id})
          ]
        }
      ),
      catchError(() => {
        throw new Error('could not post from http')
      })
    )
  )

  updateItemEffect = createEffect(() => this.actions.pipe(
    ofType(EntityActions.startUpdateItemAction),
    switchMap(value => this.httpService.save(value)),
    map(item => EntityActions.completeUpdateItemAction(item))
  ))
}

