import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {IKeyRoomHttpService} from "../../service/key-room/key-room.http.service.factory";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import * as EntityActions from "../action/meter.action";
import {map, mergeMap} from "rxjs";
import {ProviderChangeComponent} from "../../app/change-value/provider-change/provider-change.component";
import {SimpleRef} from "../models/simple-ref.model";


@Injectable()
export class MeterEffect {
  constructor(
    private actions: Actions,
    private httpService: IKeyRoomHttpService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  openMeterTypeChangeDialogEffect = createEffect(
    () => this.actions.pipe(
      ofType(EntityActions.startChangeMeterTypeAction),
      mergeMap(() => {
          const dialogRef = this.dialog.open(ProviderChangeComponent, {
            data: {id: "someId", present: "it works"} as SimpleRef
          });
          return dialogRef.afterClosed().pipe(
            map(value => EntityActions.completeChangeMeterTypeAction({present: "241", id: "soneanotherid"}))
          )
        }
      )

      //  console.log("it works")
      //
      //
      //  dialogRef.afterClosed().subscribe(
      //    map(value => EntityActions.completeChangeMeterTypeAction({present: "241", id: "soneanotherid"}))
      //  )
      // console.log("it works")

    ))
}
