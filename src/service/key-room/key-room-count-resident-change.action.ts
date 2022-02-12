import {IKeyRoom} from "../../store/models/key-room.model";
import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import * as EntityActions from "../../store/action/key-room.action";
import {take} from "rxjs";
import {Store} from "@ngrx/store";
import {EntityEditAction} from "../meter/entity-edit-action";
import {IKeyRoomState} from "../../store/state/key-room.state";
import {SimpleNumberChangeComponent} from "../../app/change-value/simple-number-change/simple-number-change.component";
import {keyRoomModelConvertor} from "./key-room-model.convertor";
import {getKeyRoomByIdSelector} from "../../store/selectors/key-room.selector";


@Injectable()
export class KeyRoomCountResidentChangeAction implements EntityEditAction<IKeyRoom> {

  constructor(
    private readonly dialog: MatDialog,
    private readonly store: Store<IKeyRoomState>,
  ) {
  }

  apply(model: IKeyRoom): void {
    this.dialog.open(SimpleNumberChangeComponent, {
      data: {
        value: model.countResident,
        beforeCloseAction: this.changeValue(model.id),
        inProgressAction: EntityActions.startUpdateItemAction,
        successCompleteAction: EntityActions.completeUpdateItemAction
      },
      disableClose: true
    })
  }

  public changeValue(modelId: string) {
    return (value: string) => this.applyChanges(modelId, value)
  }

  public applyChanges(modelId: string, value: string) {
    this.store.select(getKeyRoomByIdSelector(modelId)).pipe(
      take(1)
    ).subscribe((model: IKeyRoom) => {
      const modelToUpdate = keyRoomModelConvertor(model)
      modelToUpdate.countResident = Number.parseInt(value)
      this.store.dispatch(EntityActions.startUpdateItemAction(modelToUpdate))
    })
  }

}
