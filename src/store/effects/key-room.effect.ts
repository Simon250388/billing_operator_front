import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {IKeyRoomHttpService} from "src/service/key-room/key-room.http.service.factory";
import * as EntityActions from "../action/key-room.action";

@Injectable()
export class KeyRoomEffect {

  constructor(
    private actions: Actions,
    private httpService: IKeyRoomHttpService,
    private router: Router
  ) {
  }

  loadEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.startSearchKeyRoomAction),
      mergeMap(() => this.httpService.search().pipe(
        map(items => EntityActions.receiveResultSearchKeyRoomAction({items: items})),
        catchError(() => {
          throw new Error('could not get services from http')
        })
      )))
  )

  setCurrentEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.startChooseCurrentAction),
      mergeMap(action => of(EntityActions.chooseCurrentCompleteAction(action))),
      tap((current) => this.router.navigate(["/key-room", current.id],)
      ))
  )

  saveEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.addNewKeyRoomStartAction),
      mergeMap(action => this.httpService.save(action).pipe(
        map(item => EntityActions.addNewKeyRoomSuccessAction(item)),
        catchError(() => {
          throw new Error('could not post from http')
        })
      )),
      tap(() => this.router.navigate(["/key-room"])))
  )
}

