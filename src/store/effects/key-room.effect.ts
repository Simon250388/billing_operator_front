import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, switchMap} from "rxjs";
import {IKeyRoomHttpService} from "src/service/key-room/key-room.http.service.factory";
import * as EntityActions from "../action/key-room.action";
import {Router} from "@angular/router";

@Injectable()
export class KeyRoomEffect {

  constructor(
    private actions: Actions,
    private httpService: IKeyRoomHttpService,
    private router: Router
  ) {
  }

  setCurrentEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.startChooseCurrenAction),
      map((payload) => {
        this.router.navigate(["/key-room", payload.currentId])
        return EntityActions.finishChooseCurrenAction({currentId: payload.currentId})
      }),
    )
  )

  loadEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.startLoadItemsFromApiAction),
      mergeMap(() => this.httpService.search().pipe(
        map(items => EntityActions.successfulLoadItemsFromApiAction({items: new Map(items.map(i => [i.id, i]))})),
        catchError(() => {
          throw new Error('could not get services from http')
        })
      )))
  )

  saveEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.addNewKeyRoomStartAction),
      mergeMap(action => this.httpService.save(action).pipe(
        map(item => EntityActions.addNewKeyRoomSuccessAction(item)),
        catchError(() => {
          throw new Error('could not post from http')
        })
      )))
  )

  updateItemEffect = createEffect(() => this.actions.pipe(
    ofType(EntityActions.startUpdateItemAction),
    switchMap(value => this.httpService.save(value)),
    map(item => EntityActions.completeUpdateItemAction(item))
  ))
}

