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

  loadServiceSimpleRefEffect = createEffect(
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

  loadImprovementTypesSimpleRefEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.startImprovementHttpRequestAction),
      mergeMap(() =>
        this.httpService.getAll("improvement-types")
          .pipe(
            map(items => EntityActions.successfulCompleteImprovementHttpRequestAction({items: items})),
            catchError(() => {
              throw new Error('could not get improvement from http')
            })
          )
      )
    )
  )

  loadProvidersSimpleRefEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.startProvidesHttpRequestAction),
      mergeMap(() =>
        this.httpService.getAll("providers")
          .pipe(
            map(items => EntityActions.successfulCompleteImprovementHttpRequestAction({items: items})),
            catchError(() => {
              throw new Error('could not get providers from http')
            })
          )
      )
    )
  )


  loadRateGroupsSimpleRefEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.successfulCompleteRateGroupsHttpRequestAction),
      mergeMap(() =>
        this.httpService.getAll("rate-groups")
          .pipe(
            map(items => EntityActions.successfulCompleteImprovementHttpRequestAction({items: items})),
            catchError(() => {
              throw new Error('could not get providers from http')
            })
          )
      )
    )
  )


}
