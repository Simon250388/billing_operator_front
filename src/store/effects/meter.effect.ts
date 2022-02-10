import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import * as EntityActions from "../action/meter.action";
import {catchError, filter, map, mergeMap, of} from "rxjs";
import {ProviderChangeComponent} from "../../app/change-value/provider-change/provider-change.component";
import {IAppState} from "../state/app.state";
import {Store} from "@ngrx/store";
import {IMeterHttpService} from "../../service/meter/meter.http.service.factory";
import {IMeterState} from "../state/meter.state";
import {getMeterByIdSelector} from "../selectors/meter.selector";


@Injectable()
export class MeterEffect {
  constructor(
    private actions: Actions,
    private router: Router,
    private dialog: MatDialog,
    private appStore: Store<IAppState>,
    private meterStore: Store<IMeterState>,
    private httpService: IMeterHttpService
  ) {
  }

  openMeterTypeChangeDialogEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.openChangeMeterTypeDialogAction),
      map((action) => {
        const dialogRef = this.dialog.open(ProviderChangeComponent, {
          data: action.meterType
        });
        return dialogRef.afterClosed().pipe(
          map(value => value as String),
          filter(value => !!value),
          map(value => {
            return {meterId: action.meterId, meterTypeId: value}
          }))
      }),
      mergeMap(observableValue => observableValue.pipe(
        mergeMap(value => {
          return this.meterStore.select(getMeterByIdSelector(value.meterId))
            .pipe(
              mergeMap(meterModel => this.httpService.put(meterModel, "meterType", value.meterTypeId).pipe(
                  mergeMap(meterModel => of(EntityActions.updateItemAction(meterModel)))
                )
              ),
            )
        })
      ))
    ))


  loadItemsFromApiEffect = createEffect(() => this.actions.pipe(
    ofType(EntityActions.startLoadMeterItemsFromApiAction),
    mergeMap(action => this.httpService.load().pipe(
      map(item => EntityActions.successfulLoadMeterItemsFromApiAction({items: item})),
      catchError(() => {
        throw new Error('could not load from http')
      })
    ))
  ))
}
