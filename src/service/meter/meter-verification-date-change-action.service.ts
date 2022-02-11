import {Inject, Injectable, LOCALE_ID} from "@angular/core";
import {DatePipe} from "@angular/common";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {IMeterState} from "../../store/state/meter.state";
import {MatDialog} from "@angular/material/dialog";
import {MeterModel} from "../../store/models/meter.model";
import {DateChangeComponent} from "../../app/change-value/date-change/date-change.component";
import * as EntityActions from "../../store/action/meter.action";
import {getMeterByIdSelector} from "../../store/selectors/meter.selector";
import {take} from "rxjs";
import {convertModelToUpdateModel, MeterEditAction} from "./meter-edit-action";

@Injectable()
export class MeterVerificationDateChangeAction
  implements MeterEditAction<MeterModel> {

  private datePipe: DatePipe;

  constructor(
    private readonly store: Store<IAppState>,
    private readonly meterStore: Store<IMeterState>,
    private readonly dialog: MatDialog,
    @Inject(LOCALE_ID) locale: string) {
    this.datePipe = new DatePipe(locale)

  }

  apply(meter: MeterModel) {
    this.dialog.open(DateChangeComponent, {
      data: {
        value: meter.verificationDate,
        beforeCloseAction: this.verificationDateChange(meter.id),
        inProgressAction: EntityActions.startUpdateItemAction,
        successCompleteAction: EntityActions.completeUpdateItemAction
      },
      disableClose: true
    })
  }

  public verificationDateChange(meterId: string) {
    return (value: string) => this.applyChanges(meterId, value)
  }

  public applyChanges(meterId: string, verificationDate: string) {
    this.meterStore.select(getMeterByIdSelector(meterId)).pipe(
      take(1)
    ).subscribe((meterModel: MeterModel) => {
      const modelToUpdate = convertModelToUpdateModel(meterModel)
      modelToUpdate.verificationDate = this.datePipe.transform(verificationDate, "yyyy-MM-dd'")!
      this.meterStore.dispatch(EntityActions.startUpdateItemAction(modelToUpdate))
    })
  }
}
