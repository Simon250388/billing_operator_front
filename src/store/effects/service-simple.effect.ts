import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as EntityActions from "../action/service-simple.action";
import {map, mergeMap} from "rxjs";
import {SimpleHttpService} from "../../service/service-simple/simple-http-service";

@Injectable()
export class ServiceSimpleEffect {
  constructor(private actions: Actions, private httpService: SimpleHttpService) {
  }

  ttt = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.servicesHttpRequestStartAction),
      mergeMap(() =>
        this.httpService.load().pipe(
          map(
            (items) => EntityActions.servicesHttpRequestSuccessAction({ items: items })
          )
        )
      )
    )
  )


}
