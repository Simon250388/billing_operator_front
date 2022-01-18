import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs";
import {ICrudHttpService} from "src/service/crud-http/crud.http.factory";
import * as EntityActions from "../action/services.action";

@Injectable()
export class ServiceEffect {
  constructor(
    private actions: Actions,
    private httpService: ICrudHttpService) {
  }

  loadFromHttpEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.startServicesHttpRequestAction),
      mergeMap(() =>
        this.httpService.getAll("service")
          .pipe(
            map(items => EntityActions.successfulCompleteServicesHttpRequestAction({items: items})),
            catchError(() => {
              throw new Error('could not get services from http')
            })
          )
      )
    )
  )


}
