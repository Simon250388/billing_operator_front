import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ProviderChangeComponent} from "../../app/change-value/provider-change/provider-change.component";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {IMeterState} from "../../store/state/meter.state";
import {MeterModel} from "../../store/models/meter.model";
import {getMeterByIdSelector} from "../../store/selectors/meter.selector";
import {take} from "rxjs";
import * as EntityActions from "../../store/action/meter.action";
import {convertModelToUpdateModel, EntityEditAction} from "./entity-edit-action";

@Injectable()
export class MeterMeterTypeChangeAction implements EntityEditAction<MeterModel> {

  constructor(
    private readonly store: Store<IAppState>,
    private readonly meterStore: Store<IMeterState>,
    private readonly dialog: MatDialog
  ) {
  }

  apply(meter: MeterModel) {
    this.dialog.open(ProviderChangeComponent, {
      data: {
        value: meter.meterType.present,
        beforeCloseAction: this.changeMeterType(meter.id),
        inProgressAction: EntityActions.startUpdateItemAction,
        successCompleteAction: EntityActions.completeUpdateItemAction
      },
      disableClose: true
    })
  }

  public changeMeterType(meterId: string) {
    return (value: string) => this.applyChanges(meterId, value)
  }

  public applyChanges(meterId: string, meterTypeId: string) {
    this.meterStore.select(getMeterByIdSelector(meterId)).pipe(
      take(1)
    ).subscribe((meterModel: MeterModel) => {
      const modelToUpdate = convertModelToUpdateModel(meterModel)
      modelToUpdate.meterTypeId = meterTypeId
      this.meterStore.dispatch(EntityActions.startUpdateItemAction(modelToUpdate))
    })
  }
}
