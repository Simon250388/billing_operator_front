import {MatDialog} from "@angular/material/dialog";
import {ProviderChangeComponent} from "../../app/change-value/provider-change/provider-change.component";
import {of, Subscription, take} from "rxjs";
import {Store} from "@ngrx/store";
import {IMeterState} from "../../store/state/meter.state";
import {IAppState} from "../../store/state/app.state";
import {getMeterByIdSelector} from "../../store/selectors/meter.selector";
import * as EntityActions from "../../store/action/meter.action";
import {MeterModel, MeterModelToUpdate} from "../../store/models/meter.model";
import {Inject, Injectable, LOCALE_ID} from "@angular/core";
import {DateChangeComponent} from "../../app/change-value/date-change/date-change.component";
import {DatePipe} from "@angular/common";

export interface MeterEditAction {
  apply(meter: MeterModel): void
}

@Injectable()
export class MeterMeterTypeChangeAction implements MeterEditAction {

  constructor(
    private readonly store: Store<IAppState>,
    private readonly meterStore: Store<IMeterState>,
    private readonly dialog: MatDialog
  ) {
  }

  apply(meter: MeterModel) {
    this.dialog.open(ProviderChangeComponent, {
      data: {
        value: meter.meterType,
        beforeCloseAction: this.changeMeterType(meter.id)
      },
      disableClose: true
    })
  }

  public changeMeterType(meterId: string) {
    return (value: string) => this.applyChanges(meterId, value)
  }

  public applyChanges(meterId: string, meterTypeId: string): Subscription {
    return this.meterStore.select(getMeterByIdSelector(meterId))
      .subscribe(
        (meterModel: MeterModel) => {
          const modelToUpdate = convertModelToUpdateModel(meterModel)
          modelToUpdate.meterTypeId = meterTypeId
          this.meterStore.dispatch(EntityActions.startUpdateItemAction(modelToUpdate))
        })
  }
}

@Injectable()
export class MeterVerificationDateChangeAction implements MeterEditAction {

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
        beforeCloseAction: this.verificationDateChange(meter.id)
      },
      disableClose: true
    })
  }

  public verificationDateChange(meterId: string) {
    return (value: string) => this.applyChanges(meterId, value)
  }

  public applyChanges(meterId: string, verificationDate: string) {
    this.meterStore.select(getMeterByIdSelector(meterId)).pipe(take(1)).subscribe((meterModel: MeterModel) => {
      const modelToUpdate = convertModelToUpdateModel(meterModel)
      modelToUpdate.verificationDate = this.datePipe.transform(verificationDate, "yyyy-MM-dd'")!
      this.meterStore.dispatch(EntityActions.startUpdateItemAction(modelToUpdate))
      return of(1);
    })
  }
}


export const convertModelToUpdateModel = (model: MeterModel): MeterModelToUpdate => {
  return {
    id: model.id,
    meterTypeId: model.meterType.id,
    verificationDate: model.verificationDate,
    meterValueDate: model.meterValueDate,
    locationId: model.location.id,
    differentiationTypeId: model.differentiationType.id
  }
}
